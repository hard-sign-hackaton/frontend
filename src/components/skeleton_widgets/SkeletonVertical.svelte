<script lang="ts">
  import {
    selected_widget_id,
    selected_widget_type,
  } from "../../lib/editor_store";
  import SkeletonBuilder from "./SkeletonBuilder.svelte";

  const { settings, widgets, id, type } = $props();
  const { k, hs } = $derived(settings);

  function handleClick(e: Event) {
    e.stopPropagation();
    selected_widget_id.set(id);
    selected_widget_type.set(type);
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
  class="h-full flex flex-col shrink-0 border border-gray-500 rounded-sm p-2 hover:cursor-pointer hover:border-cyan-500"
  onclick={handleClick}
>
  {#each hs as h, i (i)}
    <div
      class={`w-full p-2 hover:cursor-pointer hover:border-cyan-500`}
      style={`height: ${h}%;`}
    >
      <SkeletonBuilder widget={{ ...widgets[i] }} />
    </div>
  {/each}
</div>
