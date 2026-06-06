<script lang="ts">
  let datetime = $state(new Date());

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
    }, 1000);
  });
</script>

<div class="h-[5%] p-1 border border-green-500 flex flex-row justify-between">
  <div></div>
  <div>{formatDateTime(datetime)}</div>
</div>
