<script>
  import MasterWidget from "./widgets/MasterWidget.svelte";
</script>

<svelte:head>
  <title>Admin panel</title>
</svelte:head>

<main>
  <h1>Admin Panel</h1>
  <div class="flex flex-row justify-around">
    <div>
      <h2>Preview</h2>
      <div class="container border border-red-500 w-90 h-160">
        <MasterWidget />
      </div>
    </div>
    <div>
      <h2>Editor</h2>
      <div class="border border-red-500 w-90 h-160">
        <div
          class="h-[5%] p-1 m-1 border border-green-500 bg-red-400 flex flex-row justify-between"
        ></div>
      </div>
    </div>
    <div>
      <h2>Form</h2>
      <div class="border border-red-500 w-81">
        <h3>Current screen data</h3>
        <form class="m-1 p-1 flex flex-col border border-green-500">
          <label for="token">Token</label>
          <input type="text" name="token" class="border border-gray-400" />
          <label for="display_id">Display ID</label>
          <input type="text" name="display_id" class="border border-gray-400" />
          <div class="flex flex-row justify-center m-2">
            <button
              class="p-2 bg-green-500 rounded-md text-white hover:cursor-pointer hover:opacity-60"
              >Update display</button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
