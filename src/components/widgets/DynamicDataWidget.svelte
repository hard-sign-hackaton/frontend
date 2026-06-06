<script lang="ts">
    const { title, text } = $props();
</script>

<div class="w-full h-full border border-red-500">
    <h2 class="text-xl">{title}</h2>
    <p>{text}</p>
</div>
