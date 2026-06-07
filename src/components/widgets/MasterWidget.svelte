<script lang="ts">
    import BuilderWidget from "./BuilderWidget.svelte";
    import EmergencyWidget from "./EmergencyWidget.svelte";
    import HeaderWidget from "./HeaderWidget.svelte";
    import data from "../../lib/mock_data";

    const emergency = false;
</script>

<div id="master-widget" class="h-full">
    {#if emergency}
        <EmergencyWidget />
    {:else}
        <HeaderWidget />
    {/if}

    <div class="h-[95%] p-1">
        <BuilderWidget widget={data} />
    </div>
</div>
