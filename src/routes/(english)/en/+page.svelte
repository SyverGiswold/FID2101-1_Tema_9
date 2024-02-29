<script>
  import Header from "$lib/components/english/Header.svelte";
  import Card from "$lib/components/english/card/Card.svelte";
</script>

<svelte:head>
  <meta
    name="description"
    content="Explore the portfolio of Syver Giswold, a dedicated interaction designer with a focus on frontend development. Review projects that demonstrate skills in user interface design, user experience design, and more."
  />
  <meta
    name="keywords"
    content="design ui, portefølje design, portefølje grafisk design, ux og ui design, ux og ui, ui og ux, ux, ui, Interaksjonsdesign, Brukergrensesnitt design, Brukeropplevelse design, Frontend utvikling, JavaScript, CSS, HTML, Responsive design, Webdesign, Webutvikling, Prototyping, Brukertesting, Designsystemer, Designprinsipper, Tilgjengelighet, Kreativ problemløsning, Syver, Giswold"
  />
  <meta name="robots" content="follow" />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://syver-g.netlify.app/en" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Syver's portfolio" />
  <meta
    property="og:description"
    content="Explore the portfolio of Syver Giswold, a dedicated interaction designer with a focus on frontend development. Review projects that demonstrate skills in user interface design, user experience design, and more."
  />
  <meta
    property="og:image"
    content="https://syver-g.netlify.app/assets/Syver_Giswold_link_preview.webp"
  />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="syver-g.netlify.app/" />
  <meta property="twitter:url" content="https://syver-g.netlify.app/en" />
  <meta name="twitter:title" content="Syver's portfolio" />
  <meta
    name="twitter:description"
    content="Explore the portfolio of Syver Giswold, a dedicated interaction designer with a focus on frontend development. Review projects that demonstrate skills in user interface design, user experience design, and more."
  />
  <meta
    name="twitter:image"
    content="https://syver-g.netlify.app/assets/Syver_Giswold_link_preview.webp"
  />

  <!-- Meta Tags Generated via https://www.opengraph.xyz -->
</svelte:head>

<Header activeLink="home" />

<main>
  <article>
    <h1>Projects</h1>
    <p class="bold">Welcome to my porfolio!</p>

    <p>
      Here you can see some of the exciting and creative projects I have worked
      on as an interaction designer. I am familiar with tools such as Figma,
      Webflow, HTML, CSS, JavaScript, Photoshop, Illustrator, Indesign, After
      Effects, and Premiere Pro.
    </p>

    <p>
      I hope you enjoy projects and seeing what I have learned and
      achieved. If you have any questions or feedback, feel free to contact me.
    </p>
  </article>

  <section class="gallery-section">
    <Card
      link="./en/projects/tema_8"
      src="/assets/tema_8/Teksteditor_mockup.webp"
      image_transition="image-transition-tema_8"
      title="Text app"
      lede="In this task, I chose to create a rich text editor similar to TinyMCE and CKEditor that would be usable with only a keyboard."
      executed="Alone"
      period="6 weeks"
    />
    <Card
      link="./en/projects/tema_5"
      src="/assets/tema_5/Free_Laptop_Mockup.webp"
      image_transition="image-transition-tema_5"
      title="Shopping list app"
      lede="This task was about learning Javascript and creating a shopping list application in Javascript."
      executed="Alone"
      period="6 weeks"
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
