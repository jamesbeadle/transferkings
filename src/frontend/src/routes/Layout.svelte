<script lang="ts">
  import { onMount, onDestroy } from "svelte";
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
  let sidebar: HTMLElement;

  const init = async () => await Promise.all([syncAuthStore()]);

  let options = [
    { name: 'Agent Hub', href: '/agent-hub' },
    { name: 'Contract Center', href: '/contract-center' },
    { name: 'My Agencies', href: '/my-agencies' },
    { name: 'Profile', href: '/profile' },
    { name: 'Connect (Soon)', href: '#connect' },
  ];

  let lessImportantOptions = [
    { name: 'Game Rules', href: '/rules' }
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
        if (button) {
          buttonHeight = button.clientHeight;
          const sidebarHeight = window.innerHeight - buttonHeight;
          document.documentElement.style.setProperty('--sidebar-height', `${sidebarHeight}px`);
        }
      });
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (browser && expanded && sidebar && !sidebar.contains(event.target as Node)) {
      console.log("Clicked outside sidebar, closing sidebar.");
      expanded = false;
    }
  };

  const handleButtonClick = (event: MouseEvent) => {
    event.stopPropagation();
    expanded = !expanded;
    console.log("Menu button clicked, expanded:", expanded);
  };

  const handleCloseButtonClick = (event: MouseEvent) => {
    event.stopPropagation();
    expanded = false;
    console.log("Close button clicked, expanded:", expanded);
  };

  onMount(async () => {
    worker = await initAuthWorker();
    updateSidebarHeight();
    if (browser) {
      window.addEventListener('resize', updateSidebarHeight);
      document.addEventListener('click', handleClickOutside);
    }
  });

  onDestroy(() => {
    if (browser) {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', updateSidebarHeight);
    }
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
    <button on:click={handleButtonClick} class="flex items-center">
      <MenuIcon fill='#FFFFFF' className="w-5 m-1" />
    </button>
    <div class="ml-auto">
      <a class="flex flex-row items-center ml-auto" href="/">
        <p class="text-sm">Transfer Kings</p>
        <LogoIcon fill='#FFFFFF' className="w-4 m-1" />
      </a>
    </div>
  </div>

<aside class="bg-Brand5 p-4" bind:this={sidebar} class:expanded={expanded}>
  <div class="p-2">
    <div class="p-2 flex justify-between items-center">
      <h2 class="text-xl font-bold p-2">Options</h2>
      <button on:click={handleCloseButtonClick} class="close-button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
    
    <ul class="mt-4 space-y-2">
      {#each options as option}
        <li>
          <a href={option.href} class="block rounded hover:bg-Brand5b px-4 py-2">{option.name}</a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="less-important p-2">
    <div class="horizontal-divider my-2" />
    <ul class="space-y-2 text-xs">
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

  aside.expanded {
    left: 0px;
  }
</style>
