<script>
  export let link = "https://github.com/SyverGiswold"

	export let src = "https://placehold.co/600x400"
  export let image_transition = "Write an image transition class"

	export let title = "Write a title"
	export let lede = "Write a lede that describes the project in a short and concise version"
	export let executed = "Write if it was done alone or not"
	export let period = "How long did you have on the task"

	let tiltX = 0;
  let tiltY = 0;

	function handleMouseMove(event) {
			const { width, height, left, top } = event.currentTarget.getBoundingClientRect();
			tiltY = (event.clientY - top) / height - 0.5;
			tiltX = (event.clientX - left) / width - 0.5;
  };

  function resetTilt() {
			tiltX = 0;
    	tiltY = 0;
  };

</script>

<a class="card" href={link} on:mousemove={handleMouseMove} on:mouseleave={resetTilt} style:transform={`perspective(500px) rotateX(${tiltY * 15}deg) rotateY(${tiltX * -15}deg)`}>
	<img alt="" src={src} class={image_transition}>
	<div class="card_text">
		<h2>{title}</h2>
		<p>{lede}</p>
		<span><span class="bold">Utført:</span> {executed}</span>
		<span><span class="bold">Lengde:</span> {period}</span>
	</div>
</a>

<style>
	.card{
		display: flex;
		flex-direction: column;
    gap: 24px;
		border: 2px solid var(--secondary-background);
		padding: 24px;
		border-radius: var(--border-radius);
		text-decoration: none;
    color: var(--primary-text);
    flex: 0 0 calc(50% - 24px);
		transform-style: preserve-3d;
    transition: border 0.2s ease, transform 0.2s ease;
	}

	img {
		max-width: 100%;
    object-fit: cover;
	}

	div,
	img {
		transform: perspective(500px) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1);
		transition: transform 0.2s;
	}

	.card_text {
		display: flex;
		flex-direction: column;
	}

  span {
    margin-top: 2rem;
  }

  .card:focus {
    border: 4px solid var(--secondary-background);
  }

	@media only screen and (min-width: 1000px) {
	.card{
		display: flex;
		flex-direction: row;
    gap: 24px;
		border: 2px solid var(--secondary-background);
		padding: 24px;
		border-radius: var(--border-radius);
		text-decoration: none;
    color: var(--primary-text);
    flex: 0 0 calc(50% - 24px);
	}

	img {
		max-width: 50%;
	}
  }

  @media only screen and (max-width: 750px) {
    .card {
      flex: 1;
			width: 100%;
    }
  }

  @media (hover: hover) {
    .card:hover {
      border: 4px solid var(--secondary-background);
    }

		.card:hover img,
		.card:hover div {
			transform: perspective(500px) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 15, 1);
		}
}

	@media (prefers-reduced-motion) {
		.card {
			transform: perspective(0px) rotateX(0deg) rotateY(0deg) !important;
		}

		.card:hover img,
		.card:hover div {
			transform: perspective(0px) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1);
		}
	}
</style>