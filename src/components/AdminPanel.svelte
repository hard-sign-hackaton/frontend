<script lang="ts">
  import SkeletonBuilder from "./skeleton_widgets/SkeletonBuilder.svelte";
  import MasterWidget from "./widgets/MasterWidget.svelte";
  import {
    selected_widget_id,
    selected_widget_type,
  } from "../lib/editor_store";

  // import data from "../lib/mock_data";
  let deafult_data = {
    id: 0,
    type: "vertical",
    settings: {
      k: 1,
      hs: [100],
    },
    data: [
      {
        id: 1,
        type: "empty",
      },
    ],
  };
  let data = $state(deafult_data);
  let id = 1;

  const widget_types = ["news", "static", "dynamic", "vertical", "horizontal"];
  const lengths = [1, 2, 3];
  let k = $state(1);
  let ks = $state([0, 0, 0]);

  function sleep() {
    return new Promise((resolve) => setTimeout(resolve, 100));
  }

  function nextId() {
    id++;
    return id;
  }

  function findById(curr: any, id: any): any {
    if (curr.id === id) return curr;

    if (curr.type === "vertical" || curr.type === "horizontal") {
      for (let l of curr.data) {
        const res = findById(l, id);
        if (res != null) return res;
      }
    }

    return null;
  }

  function createFields(target: any, type: string) {
    if (type === "vertical") {
      target.settings = { k: 1, hs: [100] };
      target.data = [{ id: nextId(), type: "empty" }];
    } else if (type === "horizontal") {
      target.settings = { k: 1, ws: [100] };
      target.data = [{ id: nextId(), type: "empty" }];
    } else if (type === "news") {
      target.settings = {};
      target.data = { news: [] };
    } else if (type === "static") {
      target.settings = {};
      target.data = { title: "", text: "" };
    } else if (type === "dynamic") {
      target.settings = {};
      target.data = { title: "", text: "" };
    }
  }

  async function handleKChange() {
    await sleep();
    // find element with current id and fill it with k empty elements
    const target = findById(data, $selected_widget_id);
    target.settings.k = k;
    if ($selected_widget_type === "vertical") {
      let arr = Array(k).fill(Math.floor(100 / k));
      target.settings.hs = arr;
      ks = arr;
    } else {
      let arr = Array(k).fill(Math.floor(100 / k));
      target.settings.ws = arr;
      ks = arr;
    }
    const newArr = [];
    for (let i = 0; i < k; i++) {
      newArr.push({ id: nextId(), type: "empty" });
    }
    target.data = newArr;
  }

  // find element with current id and change its ks array
  async function handleKsChange() {
    await sleep();
    const target = findById(data, $selected_widget_id);

    for (let i in ks) {
      if ($selected_widget_type === "vertical") {
        target.settings.hs[i] = ks[i];
      } else {
        target.settings.ws[i] = ks[i];
      }
    }
  }

  // find element with current id and replace its type (and following structure)
  async function handleTypeChange() {
    await sleep();
    const target = findById(data, $selected_widget_id);
    const newType = $selected_widget_type;
    target.type = newType;
    createFields(target, newType);
  }

  function handleDelete() {
    // find element with current id and delete if from the tree
  }

  function saveTemplate() {
    // send template to server
  }

  // $effect(() => {
  //   console.log(ks);
  // });
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
        <MasterWidget widget={data} />
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
          <select
            name=""
            id=""
            bind:value={$selected_widget_type}
            oninput={handleTypeChange}
          >
            {#each widget_types as type}
              <option value={type}>{type}</option>
            {/each}
          </select>
          {#if $selected_widget_type === "vertical" || $selected_widget_type === "horizontal"}
            <div>{ks}</div>
            <select
              name=""
              id=""
              bind:value={k}
              class="block"
              oninput={handleKChange}
            >
              {#each lengths as l}
                <option value={l}>{l}</option>
              {/each}
            </select>
            {#each { length: k } as _, i}
              <input
                type="text"
                placeholder={i.toString()}
                class="border border-gray-400"
                bind:value={ks[i]}
                oninput={handleKsChange}
              />
            {/each}
          {/if}
          <div class="flex flex-row justify-around m-2">
            <button
              class="p-2 bg-red-500 rounded-md text-white hover:cursor-pointer hover:opacity-60"
              onclick={handleDelete}>Delete</button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
