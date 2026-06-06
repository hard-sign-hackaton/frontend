<script lang="ts">
  import SkeletonBuilder from "./SkeletonBuilder.svelte";

  const { settings, widgets } = $props();
  const { k, hs } = $derived(settings);
</script>

<div class="h-full flex flex-col shrink-0 border border-gray-500 rounded-sm p-2">
  {#each hs as h, i}
    <div class={`w-full p-2`} style={`height: ${h}%;`}>
      <SkeletonBuilder widget={{ ...widgets[i] }} />
    </div>
  {/each}
</div>
