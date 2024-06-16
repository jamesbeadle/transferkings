<script lang="ts">
    import LogoIcon from "$lib/icons/logo-icon.svelte";
    import { Spinner } from "@dfinity/gix-components";
    import Layout from "../Layout.svelte";
    import { onMount } from "svelte";
    import CreateAgentModal from "$lib/components/agent/create-agent-modal.svelte";
    import type { AgentDTO } from "../../../../declarations/backend/backend.did";
    import { agentStore } from "$lib/stores/agent-store";
    import { writable } from "svelte/store";

    let isLoading = true; 
    let showAgentCreate = false;
    let agent = writable<AgentDTO | null>(null);
    let activeTab: string = "all-stars";

    onMount(async () => {
        try{
            await agentStore.sync();
            if(!$agentStore){
                showAgentCreate = true;
            }

        } catch (error) {
            console.error("Error loading contract center", error);
        } finally {
            isLoading = false;
        }
    });

    function confirmAgentCreate(){
        showAgentCreate = false;
    }

    function setActiveTab(tab: string): void {
        activeTab = tab;
    }

</script>
{#if showAgentCreate}
    <CreateAgentModal visible={showAgentCreate} confirmModal={confirmAgentCreate} />
{/if}
<Layout>    
    <div class="p-4">
        {#if isLoading}
            <Spinner />
        {:else}
            <div class="flex flex-row items-center">
                <LogoIcon fill='#FFFFFF' className="w-6 mr-2" />
                <p class="text-xl">Contract Center</p>
            </div>
            
            <div class="bg-Brand5y mt-6 rounded-md">
                <ul
                  class="flex bg-light-gray px-1 md:px-4 pt-2 contained-text border-b border-gray-700 text-sm"
                >
                  <li
                    class={`mr-1 md:mr-4 ${activeTab === "all-stars" ? "active-tab" : ""}`}
                  >
                    <button
                      class={`p-2 ${
                        activeTab === "all-stars" ? "text-white" : "text-gray-300"
                      }`}
                      on:click={() => setActiveTab("all-stars")}
                    >
                      All Star
                    </button>
                  </li>
                  <li
                    class={`mr-1 md:mr-4 ${
                      activeTab === "squad-players" ? "active-tab" : ""
                    }`}
                  >
                    <button
                      class={`p-2 ${
                        activeTab === "squad-players" ? "text-white" : "text-gray-300"
                      }`}
                      on:click={() => setActiveTab("squad-players")}
                    >
                      Squad
                    </button>
                  </li>
                  <li
                    class={`mr-1 md:mr-4 ${
                      activeTab === "prospects" ? "active-tab" : ""
                    }`}
                  >
                    <button
                      class={`p-2 ${
                        activeTab === "prospects" ? "text-white" : "text-gray-300"
                      }`}
                      on:click={() => setActiveTab("prospects")}
                    >
                      Prospect
                    </button>
                  </li>
                  <li
                    class={`mr-1 md:mr-4 ${
                      activeTab === "academy-players" ? "active-tab" : ""
                    }`}
                  >
                    <button
                      class={`p-2 ${
                        activeTab === "academy-players" ? "text-white" : "text-gray-300"
                      }`}
                      on:click={() => setActiveTab("academy-players")}
                    >
                      Academy
                    </button>
                  </li>
                  <li
                    class={`mr-1 md:mr-4 ${
                      activeTab === "lower-league-players" ? "active-tab" : ""
                    }`}
                  >
                    <button
                      class={`p-2 ${
                        activeTab === "lower-league-players" ? "text-white" : "text-gray-300"
                      }`}
                      on:click={() => setActiveTab("lower-league-players")}
                    >
                      Lower League
                    </button>
                  </li>
                </ul>
                <div class="p-4 text-xs">
                    {#if activeTab === "all-stars"}
                        <p>All Star contracts coming soon.</p>
                    {:else if activeTab === "squad-players"}
                        <p>Squad Player contracts coming soon.</p>
                    {:else if activeTab === "academy-players"}
                        <p>Academy Player contracts coming soon.</p>
                    {:else if activeTab === "lower-league-players"}
                        <p>Lower League Player contracts coming soon.</p>
                    {:else if activeTab === "prospects"}
                        <p>Prospects contracts coming soon.</p>
                    {/if}
                </div>
              </div>
        {/if}
    </div>
</Layout>
