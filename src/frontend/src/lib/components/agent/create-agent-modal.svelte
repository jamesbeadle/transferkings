<script lang="ts">
  import { onMount } from "svelte";
  import { Modal } from "@dfinity/gix-components";
  import LogoIcon from "$lib/icons/logo-icon.svelte";
  import { agentStore } from "$lib/stores/agent-store";
  import { writable, get } from 'svelte/store';

  export let visible: boolean;
  export let confirmModal: () => void;

  let fileInput: HTMLInputElement;
  let agentName = "";
  let displayName = "";
  let profilePicture: File;
  let profilePicturePreview = "/placeholder.png";
  let isLoading = true;
  let isChecking = false;

  let agentNameError = "";
  let displayNameError = "";
  let checkingStatus = writable('');
  let isAvailable = writable<boolean | null>(null);
  let isFormValid = writable(false);

  const checkAgentName = async () => {
    isChecking = true;
    checkingStatus.set('Checking agent name...');
    let dots = '';
    const interval = setInterval(() => {
      dots = dots.length < 3 ? dots + '.' : '';
      checkingStatus.set(`Checking agent name${dots}`);
    }, 500);

    try {
      const result = await agentStore.isAgentNameTaken(agentName);
      clearInterval(interval);
      checkingStatus.set('');
      isChecking = false;

      if (result.ok) {
        isAvailable.set(false);
        agentNameError = "Agent name is already taken.";
      } else {
        isAvailable.set(true);
        agentNameError = "";
      }
    } catch (error) {
      clearInterval(interval);
      checkingStatus.set('Error checking agent name');
      isChecking = false;
      console.error(error);
    }
    validateForm();
  };

  const validateForm = () => {
    const namePattern = /^[a-zA-Z0-9 ]{5,50}$/;
    const validAgentName = namePattern.test(agentName);
    const validDisplayName = namePattern.test(displayName);
    
    const available = get(isAvailable);
    
    if(available){
      isFormValid.set(validAgentName && validDisplayName && !isChecking && available);
    }
  };

  const handleBlur = async (field: string) => {
    const namePattern = /^[a-zA-Z0-9 ]{5,50}$/;
    if (field === "agentName") {
      if (agentName.length < 5 || agentName.length > 50) {
        agentNameError = "Agent name must be 5-50 characters long and contain only letters and numbers.";
        isAvailable.set(null);
        validateForm();
        return;
      } else if (!namePattern.test(agentName)) {
        agentNameError = "Agent name must be 5-50 characters long and contain only letters and numbers.";
        isAvailable.set(false);
        validateForm();
        return;
      } else {
        agentNameError = "";
        await checkAgentName();
      }
    } else if (field === "displayName") {
      displayNameError = namePattern.test(displayName) ? "" : "Display name must be 5-50 characters long and contain only letters and numbers.";
      validateForm();
    }
  };

  async function handleSubmit() {
    if (get(isFormValid)) {
      await agentStore.createAgent(agentName, displayName, profilePicture);
      confirmModal();
    }
  };

  const clickFileInput = () => {
    fileInput.click();
  };

  const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.size > 500 * 1024) {
        alert("File size exceeds 500KB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        profilePicturePreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  onMount(async () => {
    isLoading = false;
  });
</script>

<Modal {visible}>
  <div class="p-8 bg-Brand5c border-2 border-Brand3b">
    <div class="flex flex-col space-y-4">
      <h3 class="default-header">Create Your Agent Profile</h3>
      
      <p class="text-xs">Your agent and display name are required fields. They should only contain letters and numbers, with a length between 5 to 50 characters. 
        Your agent name must be unique.</p>
      <input type="text" placeholder="Unique Agent Name" bind:value={agentName} on:blur={() => handleBlur("agentName")} class="input"/>
      {#if agentNameError}
        <p class="text-Brand3e text-xs">{agentNameError}</p>
      {/if}
      {#if $checkingStatus}
        <p>{$checkingStatus}</p>
      {/if}
      {#if $isAvailable !== null}
        {#if $isAvailable}
          <p class="text-Brand2e text-xs">Agent name available.</p>
        {:else}
          <p class="text-Brand3e text-xs">Agent name taken</p>
        {/if}
      {/if}
      
      <input type="text" placeholder="Display Name" bind:value={displayName} on:blur={() => handleBlur("displayName")} class="input"/>
      {#if displayNameError}
        <p class="text-Brand3e text-xs">{displayNameError}</p>
      {/if}

      <div class="group flex flex-row items-center">
        <div class="w-1/6">
          <img src={profilePicturePreview} alt="Profile" class="w-full rounded-lg" />
        </div>
        <div class="w-5/6">
          <div class="file-upload-wrapper pl-4">
            <button class="btn-file-upload bg-Brand5b border-2" on:click={clickFileInput}>Upload Photo</button>
            <input
              type="file"
              id="profile-image"
              accept="image/*"
              bind:this={fileInput}
              on:change={handleFileChange}
              style="opacity: 0; position: absolute; left: 0; top: 0;"
            />
          </div> 
          <p class="ml-4 text-xs">Maximum file size: 500KB</p>
        </div>
      </div>
      <p>Your Agent Starter Pack</p>
      <div class="grid grid-cols-3 sm:grid-cols-5 gap-1 md:gap-4">
          <div class="bg-Brand5w p-4 rounded-md flex flex-col items-center text-center">
              <p class="text-3xl">5</p>
              <div class="flex-grow"></div>
              <p class="text-xs sm:text-sm">All Star Players</p>
              <div class="flex-grow"></div>
          </div>
          <div class="bg-Brand5x p-4 rounded-md flex flex-col items-center text-center">
              <p class="text-3xl">20</p>
              <div class="flex-grow"></div>
              <p class="text-xs sm:text-sm">Squad Players</p>
              <div class="flex-grow"></div>
          </div>
          <div class="bg-Brand5y p-4 rounded-md flex flex-col items-center text-center">
              <p class="text-3xl">20</p>
              <div class="flex-grow"></div>
              <p class="text-xs sm:text-sm">Prospects</p>
              <div class="flex-grow"></div>
          </div>
          <div class="bg-Brand5z p-4 rounded-md flex flex-col items-center text-center">
              <p class="text-3xl">25</p>
              <div class="flex-grow"></div>
              <p class="text-xs sm:text-sm">Academy Players</p>
              <div class="flex-grow"></div>
          </div>
          <div class="bg-Brand5 p-4 rounded-md flex flex-col items-center text-center">
              <p class="text-3xl">30</p>
              <div class="flex-grow"></div>
              <p class="text-xs sm:text-sm">Lower League Players</p>
              <div class="flex-grow"></div>
          </div>
      </div>
      
      <p>Budget: €250m</p>

      <button on:click={handleSubmit} class="px-4 py-2 rounded-md {($isFormValid && !isChecking) ? 'bg-Brand5' : 'bg-gray-500'}" disabled={!$isFormValid || isChecking}>
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
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-file-upload {
    cursor: pointer;
  }
  .btn-file-upload:disabled {
    background-color: gray;
  }
</style>
