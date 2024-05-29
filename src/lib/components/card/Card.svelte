<script>
  let node;
  let settings = { scale: 1, max: 15, reverse: true };
  const TRANSITION_MS = 300;
  let reverse = settings.reverse ? -1 : 1;
  let transitionId;

  function onMouseMove({ clientX, clientY }) {
    const { width, height, left, top } = node.getBoundingClientRect();
    const percX = (clientX - left) / width;
    const percY = (clientY - top) / height;
    const { max, scale } = settings;
    const tiltX = max - percX * max * 2;
    const tiltY = percY * max * 2 - max;
    node.style.transform = `perspective(5000px) rotateX(${reverse * tiltY}deg) rotateY(${reverse * tiltX}deg) scale3d(${scale}, ${scale}, ${scale})`;
  }

  function smoothTransition() {
    clearTimeout(transitionId);
    node.style.willChange = 'transform';
    node.style.transition = `${TRANSITION_MS}ms`;
    transitionId = setTimeout(() => node.style.transition = '0s', TRANSITION_MS);
  }

  function onMouseLeave() {
    smoothTransition();
    node.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }

  function onMouseEnter() {
    smoothTransition();
  }

  export let link = "https://github.com/SyverGiswold"
</script>

<a class="card" href={link} bind:this={node} on:mousemove={onMouseMove} on:mouseleave={onMouseLeave} on:mouseenter={onMouseEnter}>
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