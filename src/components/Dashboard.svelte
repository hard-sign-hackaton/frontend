<script lang="ts">
  import { useParams } from "@hvniel/svelte-router";
  import type { NewsItem } from "../lib/dto";

  import NewsWidget from "./widgets/NewsWidget.svelte";
  import StaticDataWidget from "./widgets/StaticDataWidget.svelte"

  const { id } = $derived(useParams());
  let datetime = $state(new Date());

  let isEmergency = $state<Boolean>(false);
  let news = $state<NewsItem[]>([
    {
      title: "Title #1",
      text: "adjaragudzhu",
      date: "2026-06-06"
    } as NewsItem,
    {
      title: "Title #2",
      text: "<p style=\"color: red;\">lolxd</p>",
      date: "2026-06-06"
    } as NewsItem,
    {
      title: "Title #3",
      text: "adjaragudzhu",
      date: "2026-06-06"
    } as NewsItem,
  ]);

  function formatDateTime(v: Date): string {
    let str = v.toLocaleDateString("ru-RU", {
      weekday: "long",
      day: "numeric",
      month: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  $effect(() => {
    setInterval(() => {
      datetime = new Date();
    }, 1000 * 30);
  });
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<main
  class={`flex flex-col justify-between h-screen w-full border border-red-500 ${isEmergency ? "bg-red-500" : ""}`}
>
  {#if isEmergency}
    <div
      class="h-[5%] p-1 m-1 border border-green-500 bg-red-500 text-white text-2xl text-center"
    >
      AAAAAAAAAAAAAAAAAAAAAAAAAA
    </div>
  {:else}
    <div
      class="h-[5%] p-1 m-1 border border-green-500 flex flex-row justify-between"
    >
      <div>({id})</div>
      <div>{formatDateTime(datetime)}</div>
    </div>
  {/if}
  <div class="h-full p-1 m-1 border border-blue-500 bg-white">
    <NewsWidget news={news} />
  </div>
  <div class="h-[40%] p-1 m-1 border border-purple-500 bg-white">
    <StaticDataWidget />
  </div>
  <div class="h-[15%] p-1 m-1 border border-yellow-500 bg-white">
    Dynamic block
  </div>
</main>
