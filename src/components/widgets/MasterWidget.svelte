<script lang="ts">
    import type { NewsItem } from "@/lib/dto";
    import BuilderWidget from "./BuilderWidget.svelte";
    import EmergencyWidget from "./EmergencyWidget.svelte";
    import HeaderWidget from "./HeaderWidget.svelte";

    const data = {
        type: "vertical",
        settings: {
            k: 3,
            hs: [40, 40, 20],
        },
        data: [
            {
                type: "news",
                settings: {},
                data: {
                    news: [
                        {
                            title: "Title #1",
                            text: "adjaragudzhu",
                            date: "2026-06-06",
                        } as NewsItem,
                        {
                            title: "Title #2",
                            text: '<p style="color: red;">lolxd</p>',
                            date: "2026-06-06",
                        } as NewsItem,
                        {
                            title: "Title #3",
                            text: "adjaragudzhu",
                            date: "2026-06-06",
                        } as NewsItem,
                    ],
                },
            },
            {
                type: "horizontal",
                settings: {
                    k: 2,
                    ws: [60, 40],
                },
                data: [
                    {
                        type: "static",
                        data: {
                            title: "1",
                            text: "1",
                        },
                    },
                    {
                        type: "vertical",
                        settings: {
                            k: 2,
                            hs: [50, 50],
                        },
                        data: [
                            {
                                type: "static",
                                data: {
                                    title: "2",
                                    text: "2",
                                },
                            },
                            {
                                type: "static",
                                data: {
                                    title: "3",
                                    text: "3",
                                },
                            },
                        ],
                    },
                ],
            },
            {
                type: "dynamic",
                settings: {},
                data: {},
            },
        ],
    };

    const emergency = false;
</script>

<div id="master-widget" class="h-full">
    {#if emergency}
        <EmergencyWidget />
    {:else}
        <HeaderWidget />
    {/if}

    <!-- {#each data as widget}
        <BuilderWidget {widget} />
    {/each} -->
    <div class="h-[95%]">
        <BuilderWidget widget={data} />
    </div>
</div>
