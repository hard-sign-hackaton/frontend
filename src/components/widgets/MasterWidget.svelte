<script lang="ts">
    import BuilderWidget from "./BuilderWidget.svelte";
    import EmergencyWidget from "./EmergencyWidget.svelte";
    import HeaderWidget from "./HeaderWidget.svelte";

    const { data } = $props();

    const emergency = true;
</script>

<div id="master-widget" class="h-full flex flex-col gap-4">
    {#if emergency}
        <EmergencyWidget />
    {:else}
        <HeaderWidget />
    {/if}

    <div class="h-[95%]">
        <BuilderWidget widget={data} />
    </div>
</div>
