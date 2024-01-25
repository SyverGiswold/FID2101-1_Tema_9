<script>
  import { onMount } from 'svelte';

  onMount(() => {
    document.documentElement.lang = 'en'; // Change 'en' to your desired language code
  });
</script>

<svelte:head>
  <title>Syver's portfolio</title>
</svelte:head>

<slot />