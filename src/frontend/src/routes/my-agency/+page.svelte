<script lang="ts">
  import { onMount } from 'svelte';
  import Layout from '../Layout.svelte';
  import { authStore } from '$lib/stores/auth-store';
  import { authSignedInStore } from '$lib/derived/auth.derived';
  let isLoading = true;

  onMount(async () => {
    try {
      await authStore.sync();
    } catch (error) {
      console.error('Error fetching homepage data:', error);
    } finally {
      isLoading = false;
    }
  });
</script>

<Layout>
  <div class="flex flex-row h-full w-full">
    <!--  -->
  </div>
</Layout>
