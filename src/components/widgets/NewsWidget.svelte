<script lang="ts">
    const { news, ...props } = $props();

    function formatDate(dateStr: string): string {
        let date = new Date(dateStr);
        let res = date.toLocaleDateString("ru-RU");
        return res;
    }
</script>

<section class="h-full">
    <h1>News</h1>
    <hr class="opacity-25 mb-2" />
    {#each news as v, i}
        <div>
            <div class="flex flex-row">
                <h1 class="mr-2">{v.title}</h1>
                <div class="small-text flex items-center opacity-20">
                    {formatDate(v.date)}
                </div>
            </div>
            {@html v.text}
            {#if i != news.length - 1}
                <hr class="opacity-25 mb-2" />
            {/if}
        </div>
    {/each}
</section>
