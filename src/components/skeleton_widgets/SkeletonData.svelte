<script lang="ts">
  import {
    selected_widget_id,
    selected_widget_type,
  } from "../../lib/editor_store";
  const { type, id } = $props();

  function handleClick(e: Event) {
    e.stopPropagation();
    selected_widget_id.set(id);
    selected_widget_type.set(type);
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<section
  class="h-full border border-gray-500 rounded-sm p-2 flex items-center justify-center hover:cursor-pointer hover:border-cyan-500"
  onclick={handleClick}
>
  <span>{type}({id})</span>
</section>
