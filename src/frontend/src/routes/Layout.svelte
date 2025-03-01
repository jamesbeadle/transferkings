<script lang="ts">

  import { onMount} from "svelte";
  import { fade } from "svelte/transition";
  import { browser } from "$app/environment";
  import { authStore, type AuthStoreData } from "$lib/stores/auth-store";
  import { userStore } from "$lib/stores/user-store";
  
  import "../app.css";

  import { initAuthWorker } from "$lib/services/worker.auth.services";
  import { storeManager} from "$lib/managers/store-manager";
  import { toasts } from "$lib/stores/toasts-store";
  import Toasts from "$lib/components/toasts/toasts.svelte";
  import { appStore } from "$lib/stores/app-store";
    import FullScreenSpinner from "$lib/components/shared/full-screen-spinner.svelte";

  export let showHeader = true;
  let isLoading = true;
  
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
    await storeManager.syncStores();
    isLoading = false;
  });

  async function onLogout() {
    await authStore.signOut();
    isLoading = false;
  }

  async function syncPage() {
    isLoading = true;
    try {
        await storeManager.syncStores();
        await appStore.checkServerVersion();
        isLoading = false;
    } catch (error) {
        console.error('[Layout] Error in syncPage:', error);
        isLoading = false;
    }
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
  <div class="flex flex-col justify-between h-screen default-text ${showHeader ? 'bg-background' : ''}">
    {#if showHeader}
      <main class="page-wrapper">
        <slot />
      </main>
    {:else}
      <main class="flex-1">
        <slot />
      </main>
    {/if}
    <Toasts />
  </div>
{/await}