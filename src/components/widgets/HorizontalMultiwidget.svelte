<script lang="ts">
    import BuilderWidget from "./BuilderWidget.svelte";

    const { settings, widgets } = $props();
    const { k, ws } = $derived(settings);
</script>

<div class="h-full flex flex-row shrink-0">
    {#each ws as w, i}
        <div class={`h-full`} style={`width: ${w}%;`}>
            <BuilderWidget widget={{ ...widgets[i] }} />
        </div>
    {/each}
</div>
