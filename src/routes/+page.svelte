<script>
  import Header from "../Header.svelte";

  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<Header activeLink="Hjem" />

<main>
  <article>
    <h1>Prosjekter</h1>

    <p>
      Jeg er en interaksjonsdesign student som er lidenskapelig opptatt av å
      skape brukervennlige og estetiske løsninger for digitale produkter. Jeg
      har erfaring med å designe og utvikle interaktive prototyper,
      brukertester, wireframes og mockups. Jeg har også interesse for frontend
      utvikling og har lært meg HTML, CSS, og JavaScript.
    </p>

    <p>
      Jeg liker å utforske nye teknologier og trender, og å lære av andre
      designere og utviklere. I porteføljen min kan du se noen av prosjektene
      jeg har jobbet med, både individuelt og i team. Jeg håper du finner dem
      interessante og inspirerende. Takk for at du besøker porteføljen min!
    </p>
  </article>

  <section class="gallery-section">
    <a href="./projects/project_1"
      ><img class="image-transition" src="src\lib\images\teksteditor_mockup.png" alt="" />
      <span>Test 1</span>
    </a>
    <a href="./page-2.html"
      ><img
        src="https://syver-portfolio-oppgave.netlify.app/Assets/Reklame_plakat.webp"
        alt=""
      />
      <span>Test 2</span>
    </a>
    <a href="./page-2.html"
      ><img
        src="https://syver-portfolio-oppgave.netlify.app/Assets/Reklame_plakat.webp"
        alt=""
      />
      <span>Test 3</span>
    </a>
    <a href="./page-2.html"
      ><img
        src="https://syver-portfolio-oppgave.netlify.app/Assets/Reklame_plakat.webp"
        alt=""
      />
      <span>Test 4</span>
    </a>
  </section>
</main>

<style>
  main {
    min-height: calc(100vh - 80px);
  }
  article {
    width: 35%;
  }

  .gallery-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 50%;
}

.gallery-section > a {
  flex: 0 0 calc(50% - 24px);
  position: relative;
}

  .gallery-section > a > img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: top;
  }

  a > span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--secondary-background);
    color: var(--tertiary-text);
    border-radius: var(--border-radius);
    opacity: 0;
    transition: opacity 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    font-size: var(--h4);
  }

  p {
    margin-top: 2rem;
  }

  @media (hover: hover) {
    .gallery-section > a:hover > span {
    opacity: 1;
  }

  .gallery-section > a:focus > span {
    opacity: 1;
  }
  }

  @media only screen and (max-width: 900px) {
    main{
      flex-direction: column;
    }

    article {
      width: 100%;
      margin-top: 2rem;
    }

    .gallery-section {
      max-width: 100%;
      margin-top: 2rem;
    }

    img {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 650px) {
    .gallery-section > a {
      flex: auto;
    }
  }

  @media only screen and (max-width: 375px) {
    .gallery-section > a {
      flex: auto;
    }

    h1 {
      line-break: anywhere;
    }
  }
</style>
