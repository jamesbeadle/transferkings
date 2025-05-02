<script lang="ts">
    import LogoIcon from "$lib/icons/logo-icon.svelte";
    interface Props {
        onLogout: () => void;
    }
    let { onLogout } : Props = $props(); 
</script>

<header class="fixed top h-16 flex items-center justify-between w-full px-4 bg-gray-900 text-white shadow-md">
    <div class="flex items-center">
        <LogoIcon className='w-8' />
    </div>

    <div class="flex items-center gap-4">
        <button class="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-BrandBlue rounded-lg transition" onclick={onLogout}>
            Disconnect
        </button>
    </div>
</header>