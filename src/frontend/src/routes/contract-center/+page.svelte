<script lang="ts">
    import LogoIcon from "$lib/icons/logo-icon.svelte";
    import { Spinner } from "@dfinity/gix-components";
    import Layout from "../Layout.svelte";
    import { onMount } from "svelte";
    import CreateAgentModal from "$lib/components/agent/create-agent-modal.svelte";
    import type { CreateAgentDTO } from "../../../../declarations/backend/backend.did";

    let isLoading = true; 
    let showAgentCreate = false;

    onMount(async () => {
        try{
            showAgentCreate = true;
            //check for agent profile

            //if no profile show setup profile screen

        } catch (error) {
            console.error("Error loading contract center", error);
        } finally {
            isLoading = false;
        }
    });

    function confirmAgentCreate(dto: CreateAgentDTO){
        showAgentCreate = false;
    }

</script>
{#if showAgentCreate}
    <CreateAgentModal visible={showAgentCreate} confirmModal={confirmAgentCreate} />
{/if}
<Layout>    
    <div class="p-4">
        <div class="flex flex-row items-center">
            <LogoIcon fill='#FFFFFF' className="w-6 mr-2" />
            <p class="text-xl">Contract Center</p>
        </div>
        {#if isLoading}
            <Spinner />
        {:else}
            <p>Welcome</p>
        {/if}
    </div>
</Layout>
