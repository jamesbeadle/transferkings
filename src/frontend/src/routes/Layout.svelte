<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { initAuthWorker } from "$lib/services/worker.auth.services";
  import { authStore, type AuthSignInParams, type AuthStoreData } from "$lib/stores/auth-store";
  import { toastsError } from "$lib/stores/toasts-store";
  import { BusyScreen, Spinner, Toasts } from "@dfinity/gix-components";
  import { fade } from "svelte/transition";
  import LogoIcon from "$lib/icons/logo-icon.svelte";
  import "../app.css";
    import MenuIcon from "$lib/icons/menu-icon.svelte";

  let expanded = false;
  let worker: { syncAuthIdle: (auth: AuthStoreData) => void } | undefined;
  let buttonHeight = 0;

  const init = async () => await Promise.all([syncAuthStore()]);

  let options = [
    { name: 'Agent Hub', href: '#dashboard' },
    { name: 'Contract Center', href: '#profile' },
    { name: 'My Agencies', href: '#profile' },
    { name: 'Profile', href: '#settings' },
    { name: 'Logout', href: '#logout' },
  ];

  let lessImportantOptions = [
    { name: 'Game Rules', href: '#settings' }
  ];


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
      requestAnimationFrame(() => {
        const button = document.querySelector(".menu-row");
        console.log(button)
        if (button) {
          buttonHeight = button.clientHeight;
          const sidebarHeight = window.innerHeight - buttonHeight;
          document.documentElement.style.setProperty('--sidebar-height', `${sidebarHeight}px`);
          console.log(sidebarHeight);
        }
      });

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
  <div class="menu-row flex items-center bg-Brand5b w-full p-2">
    <button on:click={() => expanded = !expanded} class="flex items-center">
      <MenuIcon fill='#FFFFFF' className="w-5 m-1" />
    </button>
    <div class="flex flex-row items-center ml-auto">
      <p class="text-sm">Transfer Kings</p>
      <LogoIcon fill='#FFFFFF' className="w-4 m-1" />
    </div>
  </div>

<aside class="bg-Brand5 p-4" class:expanded>
  <div class="p-2">
    <h2 class="text-xl font-bold p-2">Options</h2>
    <ul class="mt-4 space-y-2">
      {#each options as option}
        <li>
          <a href={option.href} class="block rounded hover:bg-Brand5b px-4 py-2">{option.name}</a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="less-important p-2">
    <ul class="mt-4 space-y-2 text-xs">
      {#each lessImportantOptions as option}
        <li>
          <a href={option.href} class="block rounded hover:bg-Brand5b px-4 py-2">{option.name}</a>
        </li>
      {/each}
    </ul>
  </div>
</aside>
  <div class="flex">
    <div class="flex-1 p-4">
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .expanded {
    left: 0px;
  }
</style>
