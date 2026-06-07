<script lang="ts">
    import SkeletonBuilder from "./SkeletonBuilder.svelte";

    const { settings, widgets } = $props();
    const { k, ws } = $derived(settings);
</script>

<div class="h-full flex flex-row shrink-0 border border-gray-500 rounded-sm p-2">
    {#each ws as w, i}
        <div class={`h-full p-2`} style={`width: ${w}%;`}>
            <SkeletonBuilder widget={{ ...widgets[i] }} />
        </div>
    {/each}
</div>
