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
  <a href="./" class="back-and-title">
    <h3 class="main-header-text">Reklame plakat</h3>
  </a>
</header>
<main>

  <article style="margin-bottom: 200vh;" class="project-article">
    <div><h1>Artikkel 1</h1>

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
  </div>
    <img class="image-transition" src="https://syver-portfolio-oppgave.netlify.app/Assets/Reklame_plakat.webp" alt="">
  </article>

  <article class="project-article">
    <div><h1>Artikkel 2</h1>

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
  </div>
    <img src="https://syver-portfolio-oppgave.netlify.app/Assets/Reklame_plakat.webp" alt="">
  </article>

</main>

<style>
  main {
    flex-direction: column;
  }

  
</style>