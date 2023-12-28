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

<svelte:head>
  <meta
    name="description"
    content="Utforsk porteføljen til Syver Giswold, en dedikert interaksjonsdesigner med fokus på frontend-utvikling. Se gjennom prosjekter som viser ferdigheter i brukergrensesnitt design, brukeropplevelse design, og mer."
  />
  <meta
    name="keywords"
    content="design ui, portefølje design, portefølje grafisk design, ux og ui design, ux og ui, ui og ux, ux, ui, Interaksjonsdesign, Brukergrensesnitt design, Brukeropplevelse design, Frontend utvikling, JavaScript, CSS, HTML, Responsive design, Webdesign, Webutvikling, Prototyping, Brukertesting, Designsystemer, Designprinsipper, Tilgjengelighet, Kreativ problemløsning, Syver, Giswold"
  />

  <meta property="og:title" content="Syver's portefølje" />
  <meta property="og:site_name" content="syver-g.netlify.app"/>
  <meta property="og:url" content="https://syver-g.netlify.app/"/>
  <meta property="og:description" content="Utforsk porteføljen til Syver Giswold, en dedikert interaksjonsdesigner med fokus på frontend-utvikling. Se gjennom prosjekter som viser ferdigheter i brukergrensesnitt design, brukeropplevelse design, og mer." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://syver-g.netlify.app/assets/Syver_Giswold_04_12x12.webp" />
</svelte:head>

<Header activeLink="Hjem" />

<main>
  <article>
    <h1>Prosjekter</h1>
    <p class="bold">Velkommen til porteføljen min!</p>

    <p>
      Her kan du se noen av de spennende og kreative prosjektene jeg har jobbet
      med som interaksjonsdesigner. Jeg har kjennskap til verktøy som Figma,
      Webflow, HTML, CSS, JavaScript, Photoshop, Illustrator, Indesign, After
      Effects, og Premiere Pro.
    </p>

    <p>
      Jeg håper du liker å utforske prosjektene mine og se hva jeg har lært og
      oppnådd. Hvis du har noen spørsmål eller tilbakemeldinger så er det bare å
      kontakte meg.
    </p>
  </article>

  <section class="gallery-section">
    <a href="./projects/tema_8"
      ><img
        class="image-transition-tema_8"
        src="/assets/tema_8/Teksteditor_mockup.webp"
        alt=""
      />
      <span>Tema 8</span>
    </a>
    <a href="./projects/tema_5"
      ><img
        class="image-transition-tema_5"
        src="/assets/tema_5/Free_Laptop_Mockup.webp"
        alt=""
      />
      <span>Tema 5</span>
    </a>
  </section>
</main>

<style>
  main {
    min-height: calc(100vh - 80px);
  }

  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
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
    main {
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
