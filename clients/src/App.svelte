<script>
  import { onMount } from "svelte";
  let data;
  async function fetchName() {
    try {
      const response = await fetch("http://localhost:4000/home");

      data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }

  onMount(() => {
    fetchName();
  });
</script>

<h1>Hello {data}!</h1>

<style>
  h1 {
    color: tomato;
  }
</style>
