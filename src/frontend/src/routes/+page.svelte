<script lang="ts">
    import { authSignedInStore } from "$lib/derived/auth.derived";
import LogoIcon from "$lib/icons/logo-icon.svelte";
    import { authStore, type AuthSignInParams } from "$lib/stores/auth-store";
import Layout from "./Layout.svelte";


    function handleLogin() {
        let params: AuthSignInParams = {
        domain: import.meta.env.VITE_AUTH_PROVIDER_URL,
        };
        authStore.signIn(params);
    }
</script>
<Layout>    
    <div class="p-4">
        <div class="flex flex-row items-center">
            <p class="text-2xl">Welcome to Transfer Kings</p>
            <LogoIcon fill='#FFFFFF' className="w-10 ml-4" />
        </div>
        <p class="my-2">Collect your favourite players on Transfer Kings.</p>
        <a href="/rules">
            <button class="my-2 px-4 py-2 rounded-sm">Rules</button>
        </a>
        {#if $authSignedInStore}
            <a href="/cards" class="brand-button">Cards</a>
        {:else}
            <button class="bg-gray-500 my-2 px-4 py-2 rounded-sm" on:click={handleLogin}>Connect</button>
        {/if}
    </div>
</Layout>
