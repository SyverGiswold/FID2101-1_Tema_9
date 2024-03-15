<script>
	import tilt from '$lib/components/card/tilt.js';
	let reverse = true;

  export let link = "https://github.com/SyverGiswold"
</script>

<a class="card" href={link} use:tilt={{ scale: 1, reverse }}>
  <slot name="image"></slot>
  <div class="card_text">
    <slot name="title"></slot>
    <slot name="lede"></slot>
    <slot name="executed"></slot>
    <slot name="period"></slot>
  </div>
</a>

<style>
	 @import "$lib/components/card/card.css";
</style>