<script lang="ts">
  import BuilderWidget from "./BuilderWidget.svelte";
  import EmergencyWidget from "./EmergencyWidget.svelte";
  import HeaderWidget from "./HeaderWidget.svelte";

  const emergency = false;
  let { widget } = $props();
</script>

<div id="master-widget" class="h-full">
  {#if emergency}
    <EmergencyWidget />
  {:else}
    <HeaderWidget />
  {/if}

  <div class="h-[95%] p-1">
    <BuilderWidget {widget} />
  </div>
</div>
