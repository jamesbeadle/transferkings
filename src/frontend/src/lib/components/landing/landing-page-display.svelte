<script lang="ts">
    import IcpLogo from "$lib/icons/icp-icon.svelte";
    import LogoIcon from "$lib/icons/logo-icon.svelte";
    
    interface Props {
        handleLoginClick: () => void;
    }

    let { handleLoginClick } : Props = $props();
    
</script>

<div class="relative flex flex-col items-center justify-center w-full md:min-h-screen">
    <div class="items-center w-full max-w-sm mx-4">
        <div class="flex flex-col items-center justify-center mb-5">
            <LogoIcon className="w-32 h-32 md:w-40 md:h-40 mb-8" />
            <p class="text-3xl">Transfer Kings</p>
        </div>
        <p class="mb-8 text-lg text-center">
            Collect official ICFC trading cards today.
        </p>
        <div class="flex flex-row items-center justify-center mx-2 mb-4 space-x-2 md:space-x-4">
            <div class="w-full border border-l border-BrandLightGray"></div>
            <p class="text-center text-xxs whitespace-nowrap">Connect Instantly</p>
            <div class="w-full border border-r border-BrandLightGray"></div>
        </div>
        <div class="mx-2 space-y-4">
            <button 
                class="flex items-center justify-center w-full py-2 mr-8 rounded lg:mx-0 bg-BrandGrayShade1 hover:bg-BrandGrayShade2"
                onclick={handleLoginClick}
            >
              <span class="mr-2"><IcpLogo /></span> Internet Identity
            </button>
            <div class="mt-6 text-xs text-center">
                <a href="/terms" target="_blank" class="underline hover:text-BrandGreen">Terms and Conditions</a>
            </div>
        </div>
    </div>
</div>
