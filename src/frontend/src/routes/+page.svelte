<script>
    import LogoIcon from "$lib/icons/logo-icon.svelte";
import Layout from "./Layout.svelte";

</script>
<Layout>    
    <div class="p-4">
        <div class="flex flex-row items-center">
            <p class="text-2xl">Welcome to Transfer Kings</p>
            <LogoIcon fill='#FFFFFF' className="w-10 ml-4" />
        </div>
        <p class="my-2">Become your own football agent.</p>
        <button class="bg-Brand1b my-2 px-4 py-2 rounded-sm">Rules</button>
        <button class="bg-Brand1d my-2 px-4 py-2 rounded-sm">Play</button>
    </div>
</Layout>
