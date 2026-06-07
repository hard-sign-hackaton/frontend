<script>
    import { BrowserRouter, Routes, Route } from "@hvniel/svelte-router";
    import AdminPanel from "./components/AdminPanel.svelte";
    import Dashboard from "./components/Dashboard.svelte";
    import MasterWidget from "./components/widgets/MasterWidget.svelte";
</script>

<BrowserRouter>
    <Routes>
        <Route path="/" Component={AdminPanel} />
        <Route path="/demo/:id" Component={Dashboard} />
    </Routes>
</BrowserRouter>
