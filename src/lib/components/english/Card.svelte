<script>
  export let link = "https://github.com/SyverGiswold"

	export let src = "https://placehold.co/600x400"
  export let image_transition = "Write an image transition class"

	export let title = "Write a title"
	export let lede = "Write a lede that describes the project in a short and concise version"
	export let executed = "Write if it was done alone or not"
	export let period = "How long did you have on the task"
</script>

<a class="card" href={link}>
	<img alt="" src={src} class={image_transition}>
	<div class="card_text">
		<h2>{title}</h2>
		<p>{lede}</p>
		<span><span class="bold">executed:</span> {executed}</span>
		<span><span class="bold">duration:</span> {period}</span>
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
    transition: border 0.2s linear;
	}

	img{
		max-width: 100%;
    object-fit: cover;
	}

	.card_text{
		display: flex;
		flex-direction: column;
	}

  span {
    margin-top: 2rem;
  }

  .card:focus {
    border: 4px solid var(--secondary-background);
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
}
</style>