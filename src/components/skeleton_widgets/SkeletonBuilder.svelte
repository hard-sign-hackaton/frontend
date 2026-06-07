<script lang="ts">
  import SkeletonHorizontal from "./SkeletonHorizontal.svelte";
  import SkeletonVertical from "./SkeletonVertical.svelte";
  import SkeletonData from "./SkeletonData.svelte";

  const { widget } = $props();
</script>

{#if widget.type === "news" || widget.type === "static" || widget.type === "dynamic" || widget.type === "empty"}
  <SkeletonData type={widget.type} id={widget.id} />
{:else if widget.type === "horizontal"}
  <SkeletonHorizontal
    widgets={widget.data}
    settings={widget.settings}
    id={widget.id}
    type={widget.type}
  />
{:else if widget.type === "vertical"}
  <SkeletonVertical
    widgets={widget.data}
    settings={widget.settings}
    id={widget.id}
    type={widget.type}
  />
{/if}
