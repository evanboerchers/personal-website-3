<script>
  let { children } = $props();
  import "../app.css";
  import NavBar from "$lib/navigation/nav-bar.svelte";
</script>
  {@render children()}