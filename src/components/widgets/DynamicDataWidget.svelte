<script lang="ts">
    import display_store from "../../lib/display_store.svelte";
    const { id } = $props();

    let title = $derived(display_store[id].title);
    let text = $derived(display_store[id].text);
</script>

<div class="w-full h-full bg-white rounded-3xl p-4">
    <h2 class="text-xl">{title}</h2>
    <p>{text}</p>
</div>
