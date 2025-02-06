<script>
  import { onMount } from 'svelte';
  
  let year;
  
  onMount(() => {
    year = new Date().getFullYear();
  });
</script>
<div>
  My portfolio baby
  {year}
</div>

<style>
</style>
