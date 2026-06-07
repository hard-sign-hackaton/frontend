<script>
  import SkeletonBuilder from "./skeleton_widgets/SkeletonBuilder.svelte";
  import MasterWidget from "./widgets/MasterWidget.svelte";
  import {
    selected_widget_id,
    selected_widget_type,
  } from "../lib/editor_store";

  import data from "../lib/mock_data";

  const widget_types = ["news", "static", "dynamic", "vertical", "horizontal"];
  let k = $state(0);
  let ks = $derived(Array(k));

  $effect(() => {
    console.log(ks);
  });
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
          class="h-[5%] p-1 border border-green-500 bg-red-400 flex flex-row justify-between"
        ></div>
        <div class="h-[95%] p-1">
          <SkeletonBuilder widget={data} />
        </div>
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

        <h3>Widget editor</h3>
        <div>{$selected_widget_id}</div>
        <div>{$selected_widget_type}</div>
        <form>
          {#if $selected_widget_type === "news" || $selected_widget_type === "static" || $selected_widget_type === "dynamic" || $selected_widget_type === "empty"}
            <select name="" id="" bind:value={$selected_widget_type}>
              {#each widget_types as type}
                <option value={type}>{type}</option>
              {/each}
            </select>
          {:else if $selected_widget_type === "vertical" || $selected_widget_type === "horizontal"}
            <input
              type="text"
              placeholder="k"
              bind:value={k}
              class="border border-gray-400"
            />
            {#each { length: k } as _, i}
              <input
                type="text"
                placeholder={i.toString()}
                class="border border-gray-400"
                bind:value={ks[i]}
              />
            {/each}
          {/if}
          <div class="flex flex-row justify-center m-2">
            <button
              class="p-2 bg-green-500 rounded-md text-white hover:cursor-pointer hover:opacity-60"
              >Save</button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
