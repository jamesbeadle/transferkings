<script lang="ts">
    import { onMount } from "svelte";
    import { Modal } from "@dfinity/gix-components";
    import type { CreateAgentDTO } from "../../../../../declarations/backend/backend.did";
    import { userGetAgentPicture } from "$lib/derived/agent.derived";
    import LogoIcon from "$lib/icons/logo-icon.svelte";
    
    export let visible: boolean;
    export let confirmModal: (dto: CreateAgentDTO) => void;
    
    let fileInput: HTMLInputElement;
  
    let isLoading = true;
    let uniqueAgencyName = "";
    let displayName = "";
    let profilePicture = "";
    let starterPackDetails = {
        allStarPlayers: 5,
        squadPlayers: 20,
        prospects: 20,
        academyPlayers: 25,
        lowerLeaguePlayers: 30
    };
  
    onMount(async () => {
      try {
        // Any initialization code can go here
      } catch (error) {
        // Handle errors here
      } finally {
        isLoading = false;
      }
    });
  
    const handleSubmit = () => {
        
    };


    function clickFileInput() {
        fileInput.click();
    }


  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.size > 500 * 1024) {
        alert("File size exceeds 500KB");
        return;
      }

      //TODO Use the file
    }
  }
</script>
  
<Modal {visible}>
    <div class="p-8 bg-Brand5c">
        <div class="flex flex-col space-y-4">
            <h3 class="default-header">Create Your Agent Profile</h3>
            
            <input type="text" placeholder="Unique Agency Name" bind:value={uniqueAgencyName} class="input"/>
            <input type="text" placeholder="Display Name" bind:value={displayName} class="input"/>
            <div class="group flex flex-row items-center">
                <div class="w-1/6">
                    <img src={$userGetAgentPicture ? $userGetAgentPicture : '/placeholder.png'} alt="Profile" class="w-full rounded-lg border-2 border-Brand4" />
                </div>
                <div class="w-5/6">
                
                    <div class="file-upload-wrapper pl-4">
                      <button class="btn-file-upload bg-Brand5b" on:click={clickFileInput}
                        >Upload Photo</button
                      >
                      <input
                        type="file"
                        id="profile-image"
                        accept="image/*"
                        bind:this={fileInput}
                        on:change={handleFileChange}
                        style="opacity: 0; position: absolute; left: 0; top: 0;"
                      />
                    </div>
                
                </div>
              </div>
              

            <p>Your Agency Starter Pack</p>
            <div class="grid grid-cols-5 gap-4">
                <div class="bg-Brand5w p-4 rounded-md flex flex-col items-center text-center">
                    <p class="text-3xl">5</p>
                    <div class="flex-grow"></div>
                    <p class="text-sm">All Star Players</p>
                    <div class="flex-grow"></div>
                </div>
                <div class="bg-Brand5x p-4 rounded-md flex flex-col items-center text-center">
                    <p class="text-3xl">20</p>
                    <div class="flex-grow"></div>
                    <p class="text-sm">Squad Players</p>
                    <div class="flex-grow"></div>
                </div>
                <div class="bg-Brand5y p-4 rounded-md flex flex-col items-center text-center">
                    <p class="text-3xl">20</p>
                    <div class="flex-grow"></div>
                    <p class="text-sm">Prospects</p>
                    <div class="flex-grow"></div>
                </div>
                <div class="bg-Brand5z p-4 rounded-md flex flex-col items-center text-center">
                    <p class="text-3xl">25</p>
                    <div class="flex-grow"></div>
                    <p class="text-sm">Academy Players</p>
                    <div class="flex-grow"></div>
                </div>
                <div class="bg-Brand5 p-4 rounded-md flex flex-col items-center text-center">
                    <p class="text-3xl">30</p>
                    <div class="flex-grow"></div>
                    <p class="text-sm">Lower League Players</p>
                    <div class="flex-grow"></div>
                </div>
            </div>
            

            <p>Budget: €250m</p>

            <button on:click={handleSubmit} class="px-4 py-2 rounded-md bg-Brand5">
                <div class="flex flex-row items-center justify-center w-full text-center space-x-2 py-2">
                    <LogoIcon className='w-6' fill='#FFFFFF' />
                    <p>Begin</p>
                </div>
                </button>
        </div>
    </div>
</Modal>

<style>
    .input {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .btn {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .btn-primary {
        background-color: #007bff;
    }
</style>
