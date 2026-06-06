<script lang="ts">
  import { useParams } from "@hvniel/svelte-router";

  const { id } = $derived(useParams());
</script>

<h1>Dashboard { id }</h1>
