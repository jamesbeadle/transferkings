<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { initAuthWorker } from "$lib/services/worker.auth.services";
  import { authStore, type AuthSignInParams, type AuthStoreData } from "$lib/stores/auth-store";
  import { toastsError } from "$lib/stores/toasts-store";
  import { BusyScreen, Spinner, Toasts } from "@dfinity/gix-components";
  import { fade } from "svelte/transition";
  import BurgerMenuIcon from "$lib/icons/burger-menu-icon.svelte";

  let expanded = false;
  let worker: { syncAuthIdle: (auth: AuthStoreData) => void } | undefined;
  let buttonHeight = 0;

  const init = async () => await Promise.all([syncAuthStore()]);

  const syncAuthStore = async () => {
    if (!browser) {
      return;
    }

    try {
      await authStore.sync();
    } catch (err: unknown) {
      toastsError({
        msg: {
          text: "Unexpected issue while syncing the status of your authentication.",
        },
        err,
      });
    }
  };

  const updateSidebarHeight = () => {
    if (browser) {
      const button = document.querySelector(".menu-button");
      if (button) {
        buttonHeight = button.clientHeight;
        const sidebarHeight = window.innerHeight - buttonHeight;
        document.documentElement.style.setProperty('--sidebar-height', `${sidebarHeight}px`);
        console.log(sidebarHeight);
      }
    }
  };

  onMount(async () => {
    worker = await initAuthWorker();
    updateSidebarHeight();
    window.addEventListener('resize', updateSidebarHeight);
  });

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
    <Spinner />
  </div>
{:then _}
  <div class="flex h-screen">
    <button class="menu-button bg-red-600" on:click={() => expanded = !expanded}>
      <BurgerMenuIcon />
    </button>
    <aside class:expanded>
      I'm a sidebar
    </aside>
    <div class="flex-1 bg-Brand3">
      <slot />
    </div>
    <Toasts />
  </div>
{/await}

<BusyScreen />

<style>
  aside {
    position: absolute;
    left: -500px;
    transition: all 0.5s;
    height: var(--sidebar-height);
    width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    background-color: red;
  }

  .expanded {
    left: 0px;
  }
</style>
