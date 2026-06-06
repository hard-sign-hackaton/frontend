<script lang="ts">
    import HorizontalMultiwidget from "./HorizontalMultiwidget.svelte";
    import VerticalMultiwidget from "./VerticalMultiwidget.svelte";
    import NewsWidget from "./NewsWidget.svelte";
    import StaticDataWidget from "./StaticDataWidget.svelte";
    import DynamicDataWidget from "./DynamicDataWidget.svelte";

    const { widget } = $props();
</script>

{#if widget.type === "news"}
    <NewsWidget news={widget.data.news} />
{:else if widget.type === "static"}
    <StaticDataWidget {...widget.data} />
{:else if widget.type === "dynamic"}
    <DynamicDataWidget {...widget.data} />
{:else if widget.type === "horizontal"}
    <HorizontalMultiwidget widgets={widget.data} settings={widget.settings} />
{:else if widget.type === "vertical"}
    <VerticalMultiwidget widgets={widget.data} settings={widget.settings} />
{:else}
    <div>wtf</div>
{/if}
