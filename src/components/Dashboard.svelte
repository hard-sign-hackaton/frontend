<script lang="ts">
    import MasterWidget from "./widgets/MasterWidget.svelte";

    import data from "../lib/mock_data";
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>

<main
    class={`flex flex-col justify-between h-screen w-full p-4 bg-slate-300`}
    id="dashboard"
>
    <MasterWidget {data} />
</main>
