<script>
	import { onNavigate } from '$app/navigation'

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<header>
  <h3>Demo site</h3>
</header>
<main>

  <article>
    <h1 class="content-title">Lorem ipsum dolor sit amet.</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illo sunt reiciendis quaerat perferendis
      magni velit veniam hic eos similique laudantium sint minima deleniti veritatis nesciunt corporis, aperiam
      dolores tenetur enim. Ullam aut at reiciendis atque facilis architecto non corporis?
    </p>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae necessitatibus doloribus, ipsum, et cumque
      facilis iste temporibus hic at nam ipsam accusantium quasi neque! Vitae quae sint commodi obcaecati architecto
      odit similique doloribus dolorum? Exercitationem earum voluptate sunt rerum tenetur.
    </p>
  </article>

  <section class="gallery-Section">
    <a href="./about"><img src="https://syver-portfolio-oppgave.netlify.app/Assets/Reklame_plakat.webp"
        alt="">
        <span>Test 1</span>
      </a>
    <a href="./page-2.html"><img src="https://syver-portfolio-oppgave.netlify.app/Assets/Reklame_plakat.webp"
        alt="">
        <span>Test 2</span>
      </a>
    <a href="./page-2.html"><img src="https://syver-portfolio-oppgave.netlify.app/Assets/Reklame_plakat.webp"
        alt="">
        <span>Test 3</span>
      </a>
    <a href="./page-2.html"><img src="https://syver-portfolio-oppgave.netlify.app/Assets/Reklame_plakat.webp"
        alt="">
        <span>Test 4</span>
      </a>
  </section>

</main>

<style>
  @import '../reset.css';
  @import '../variable.css';
  @import '../style.css';
  @import '../animation.css';
</style>