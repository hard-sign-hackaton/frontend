<script lang="ts">
    import BuilderWidget from "./BuilderWidget.svelte";

    const { settings, widgets } = $props();
    const { k, hs } = $derived(settings);
</script>

<div class="h-full flex flex-col shrink-0">
    {#each hs as h, i}
        <div class={`w-full`} style={`height: ${h}%;`}>
            <BuilderWidget widget={{ ...widgets[i] }} />
        </div>
    {/each}
</div>
