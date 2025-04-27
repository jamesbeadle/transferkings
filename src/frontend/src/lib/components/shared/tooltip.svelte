<script lang="ts">
  export let text: string;
  let tooltipVisible = false;

  function toggleTooltip() {
    tooltipVisible = !tooltipVisible;
  }
</script>

<button
  class="relative flex items-center w-6 max-w-6 text-sm"
  onmouseenter={() => (tooltipVisible = true)}
  onmouseleave={() => (tooltipVisible = false)}
  onclick={toggleTooltip}
>
{@render children()}
  {#if tooltipVisible}
    <button
      class="absolute z-10 p-2 bg-OPENFPL text-white rounded-md shadow-lg p-2 px-4 hidden md:flex bg-opacity-75"
      style="transform: translate(20%, -50%); top: 50%; left: 50%;"
      onclick={toggleTooltip}
    >
      {text}
    </button>
  {/if}
</button>
