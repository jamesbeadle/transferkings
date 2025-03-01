<script lang="ts">

  import { onMount} from "svelte";
  import { fade } from "svelte/transition";
  import { browser } from "$app/environment";
  import { authStore, type AuthStoreData } from "$lib/stores/auth-store";
  
  import "../app.css";

  import { initAuthWorker } from "$lib/services/worker.auth.services";
  import { storeManager} from "$lib/managers/store-manager";
  import { toasts } from "$lib/stores/toasts-store";
  import Toasts from "$lib/components/toasts/toasts.svelte";
  import FullScreenSpinner from "$lib/components/shared/full-screen-spinner.svelte";
  import Header from "$lib/components/shared/header.svelte";
    import LandingPage from "$lib/components/landing/landing-page.svelte";

  let isLoading = true;
  let isLoggedIn: Boolean;  
  
  const init = async () => {
    await Promise.all([syncAuthStore()]);
    worker = await initAuthWorker();
  };

  const syncAuthStore = async () => {
    if (!browser) { return; }

    try {
      await authStore.sync();
    } catch (err: unknown) {
      toasts.addToast( { message: "Unexpected issue while syncing the status of your authentication.",
      type: "error" });
    }
  };

  let worker: { syncAuthIdle: (auth: AuthStoreData) => void } | undefined;

  onMount(async () => {
    worker = await initAuthWorker();
    try{
      await storeManager.syncStores();
      authStore.subscribe((store) => {
        isLoggedIn = store.identity !== null && store.identity !== undefined;
      });
    } catch {

    } finally {
      isLoading = false;
    }
    
  });

  async function onLogout() {
    await authStore.signOut();
    isLoading = false;
  }

  $: worker, $authStore, (() => worker?.syncAuthIdle($authStore))();

  $: (() => {
    if (!browser) {
      return;
    }

    if ($authStore === undefined) {
      return;
    }

    const spinner = document.querySelector("body > #app-spinner");
    spinner?.remove();
  })();
</script>

<svelte:window on:storage={syncAuthStore} />
{#await init()}
  <div in:fade>
    <FullScreenSpinner />
  </div>
{:then _}
  <div class="flex flex-col justify-between h-screen default-text">
    {#if isLoggedIn}
      <Header {onLogout} />
      <main class="page-wrapper">
        <slot />
      </main>
    {:else}
      <LandingPage />
    {/if}
    <Toasts />
  </div>
{/await}