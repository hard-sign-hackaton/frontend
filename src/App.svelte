<script>
    import { BrowserRouter, Routes, Route } from "@hvniel/svelte-router";
    import AdminPanel from "./components/AdminPanel.svelte";
    import Dashboard from "./components/Dashboard.svelte";
    import MasterWidget from "./components/widgets/MasterWidget.svelte";
    import display_store from "./lib/display_store.svelte";

    let i = 1;

    $effect(() => {
        const interval = setInterval(() => {
            display_store[7].text = i;
            i += 1;
        }, 1000);

        return () => clearInterval(interval);
    });
</script>

<BrowserRouter>
    <Routes>
        <Route path="/" Component={AdminPanel} />
        <Route path="/demo/:id" Component={Dashboard} />
    </Routes>
</BrowserRouter>
