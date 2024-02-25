<script>
  import Header from "$lib/components/Header.svelte";
  import Card from "$lib/components/Card.svelte";
</script>

<svelte:head>
  <meta
    name="description"
    content="Syver Giswold: UX/UI designer & frontend-utvikler. Se porteføljen min for brukergrensesnitt design, brukeropplevelse design, og mer. Besøk nettstedet mitt for å lære mer!"
  />
  <meta
    name="keywords"
    content="UX design, UI design, portefølje, frontend-utvikler, JavaScript, CSS, HTML, responsiv webdesign, brukeropplevelse, interaksjonsdesign, Syver Giswold"
  />
  <meta
    name="robots"
    content="follow"
  />

<!-- Facebook Meta Tags -->
<meta property="og:url" content="https://syver-g.netlify.app/">
<meta property="og:type" content="website">
<meta property="og:title" content="Syver's portefølje">
<meta property="og:description" content="Syver Giswold: UX/UI designer & frontend-utvikler. Se porteføljen min for brukergrensesnitt design, brukeropplevelse design, og mer. Besøk nettstedet mitt for å lære mer!">
<meta property="og:image" content="https://syver-g.netlify.app/assets/Syver_Giswold_link_preview.webp">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:domain" content="syver-g.netlify.app">
<meta property="twitter:url" content="https://syver-g.netlify.app/">
<meta name="twitter:title" content="Syver's portefølje">
<meta name="twitter:description" content="Syver Giswold: UX/UI designer & frontend-utvikler. Se porteføljen min for brukergrensesnitt design, brukeropplevelse design, og mer. Besøk nettstedet mitt for å lære mer!">
<meta name="twitter:image" content="https://syver-g.netlify.app/assets/Syver_Giswold_link_preview.webp">

<!-- Meta Tags Generated via https://www.opengraph.xyz -->
</svelte:head>

<Header activeLink="home" />

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
    <Card
      link="./projects/tema_8"
      src="/assets/tema_8/Teksteditor_mockup.webp"
      image_transition="image-transition-tema_8"
      title="Tekst app"
      lede="I denne oppgaven valgte jeg å lage en rich text editor tilsvarende til TinyMCE og CKEditor som skulle være brukbare med kun tastatur."
      executed="Individuelt"
      period="6 uker"
    />
    <Card
      link="./projects/tema_5"
      src="/assets/tema_5/Free_Laptop_Mockup.webp"
      image_transition="image-transition-tema_5"
      title="Handleliste app"
      lede="Denne oppgaven gikk ut på å lære Javascript og å lage en handle liste applikasjon i javascript."
      executed="Individuelt"
      period="6 uker"
    />
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
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    max-width: 60%;
  }

  p {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 1300px) {
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
  }

  @media only screen and (max-width: 755px) {
    .gallery-section {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 375px) {
    h1 {
      line-break: anywhere;
    }
  }
</style>
