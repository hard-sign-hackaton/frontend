<script lang="ts">
  import SkeletonHorizontal from "./SkeletonHorizontal.svelte";
  import SkeletonVertical from "./SkeletonVertical.svelte";
  import SkeletonData from "./SkeletonData.svelte";

  const { widget } = $props();
</script>

{#if widget.type === "news" || widget.type === "static" || widget.type === "dynamic"}
  <SkeletonData type={widget.type} />
{:else if widget.type === "horizontal"}
  <SkeletonHorizontal widgets={widget.data} settings={widget.settings} />
{:else if widget.type === "vertical"}
  <SkeletonVertical widgets={widget.data} settings={widget.settings} />
{:else}
  <div>wtf</div>
{/if}
