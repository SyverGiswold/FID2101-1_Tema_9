<script>
  import Header from "$lib/components/Header.svelte";
  import Card from "$lib/components/card/Card.svelte";

  // Mail form script https://web3forms.com/platforms/svelte-contact-form
  let status = "";
  let lastMessage = "";
  const handleSubmit = async (data) => {
    const formData = new FormData(data.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Check if the message is the same as the last one
    if (object.message === lastMessage) {
      return;
    }

    status = "Sender...";
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      status = "E-post Sent!";
      lastMessage = object.message; // Save the message as the last message
    }
  };
</script>

<svelte:head>
  <title>Syver Giswold - Interaksjonsdesigner & Frontend-utvikler</title>

  <meta
    name="description"
    content="Se Syver Giswolds portefølje - en talentfull UX/UI designer & frontend-utvikler. Utforsk innovative designløsninger og ta kontakt for ditt neste prosjekt!"
  >
  <meta
    name="keywords"
    content="interaksjonsdesign, ux design, frontend"
  >

  <link rel="alternate" hreflang="en" href="https://syver.vercel.app/en/" />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://syver.vercel.app/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Syver's portefølje">
  <meta
    property="og:description"
    content="Syver Giswold: UX/UI designer & frontend-utvikler. Se porteføljen min for brukergrensesnitt design, brukeropplevelse design, og mer. Besøk nettstedet mitt for å lære mer!"
  >
  <meta
    property="og:image"
    content="https://syver.vercel.app/assets/Syver_Giswold_link_preview.webp"
  >

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="syver.vercel.app">
  <meta property="twitter:url" content="https://syver.vercel.app/">
  <meta name="twitter:title" content="Syver's portefølje">
  <meta
    name="twitter:description"
    content="Syver Giswold: UX/UI designer & frontend-utvikler. Se porteføljen min for brukergrensesnitt design, brukeropplevelse design, og mer. Besøk nettstedet mitt for å lære mer!"
  >
  <meta
    name="twitter:image"
    content="https://syver.vercel.app/assets/Syver_Giswold_link_preview.webp"
  >

  <!-- Meta Tags Generated via https://www.opengraph.xyz -->

  <!-- Schema.org Markup -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Syver Giswold",
      "jobTitle": "Interaksjonsdesigner",
      "description": "Se Syver Giswolds portefølje - en talentfull UX/UI designer & frontend-utvikler. Utforsk innovative designløsninger og ta kontakt for ditt neste prosjekt!",
      "url": "https://syver.vercel.app/",
      "image": "https://syver.vercel.app/assets/Syver_Giswold_link_preview.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sande i Vestfold",
        "addressCountry": "Norge"
      },
      "telephone": "+4797104751",
      "email": "SyverGiswold@gmail.com",
      "sameAs": [
        "https://github.com/SyverGiswold",
        "https://www.linkedin.com/in/syver-giswold/"
      ]
    }
  </script>
</svelte:head>

<Header />

<main>
  <h1 class="sr-only">Syvers interaksjonsdesigner portefølje</h1>
  <section id="home" itemscope itemtype="https://schema.org/CreativeWork">
    <div>
      <h2 itemprop="name">Prosjekter</h2>
      <p class="bold" itemprop="description">Velkommen til porteføljen min!</p>

      <p itemprop="text">
        Her kan du se noen av de spennende og kreative prosjektene jeg har
        jobbet med som interaksjonsdesigner. Jeg har kjennskap til verktøy som
        Figma, Webflow, HTML, CSS, JavaScript, Photoshop, Illustrator, Indesign,
        After Effects, og Premiere Pro.
      </p>

      <p itemprop="text">
        Jeg håper du liker å utforske prosjektene mine og se hva jeg har lært og
        oppnådd. Hvis du har noen spørsmål eller tilbakemeldinger så er det bare
        å kontakte meg.
      </p>
    </div>

    <div class="cardSection">
      <Card link="./projects/tema_8">
        <img
          class="image-transition-tema_8"
          slot="image"
          src="/assets/tema_8/MacBook_Dresser_Mockup_4.webp"
          alt="En laptop viser en artikkel med tittelen 'Reisen til Mars' og et bilde av en Mars-rover"
        />
        <h3 slot="title">Tekst app</h3>
        <p slot="lede">
          I denne oppgaven valgte jeg å lage en rich text editor tilsvarende til
          TinyMCE og CKEditor som skulle være brukbare med kun tastatur.
        </p>
        <span slot="executed"
          ><span class="bold">Utført: </span>Individuelt</span
        >
        <span slot="period"><span class="bold">Lengde: </span>6 uker</span>
      </Card>
      <Card link="./projects/tema_5">
        <img
          class="image-transition-tema_5"
          slot="image"
          src="/assets/tema_5/Free_Laptop_Mockup.webp"
          alt="Et nettbrett viser en handleliste-app med kategorier for 'Meny', 'Rema 1000' og 'Extra'"
        />
        <h3 slot="title">Handleliste app</h3>
        <p slot="lede">
          Denne oppgaven gikk ut på å lære Javascript og å lage en handle liste
          applikasjon i javascript.
        </p>
        <span slot="executed"
          ><span class="bold">Utført: </span>Individuelt</span
        >
        <span slot="period"><span class="bold">Lengde: </span>6 uker</span>
      </Card>
      <Card link="./projects/tema_16">
        <img
          class="image-transition-tema_16"
          slot="image"
          src="/assets/tema_16/Free_Tabbed_Brochure_1.webp"
          alt="Forside av tilsynsrapport for Ygg & Lyng med tittelen 'Tilsynsrapport' og faner for navigasjon"
        />
        <h3 slot="title">Universell utforming rapport</h3>
        <p slot="lede">
          Rapporten fokuserer på universell utforming og brukervennlighet på Ygg
          & Lyng sin nettside.
        </p>
        <span slot="executed"
          ><span class="bold">Utført: </span>Individuelt</span
        >
        <span slot="period"><span class="bold">Lengde: </span>3 uker</span>
      </Card>
    </div>
  </section>
  <section id="about" itemscope itemtype="https://schema.org/Person">
    <article>
      <div>
        <h2 itemprop="name">Kort om meg</h2>

        <p itemprop="description">
          Jeg er en interaksjonsdesign student som er lidenskapelig opptatt av å
          skape brukervennlige og estetiske løsninger for digitale produkter.
          Jeg har erfaring med å designe og utvikle interaktive prototyper,
          brukertester, wireframes og mockups. Jeg har også interesse for
          frontend utvikling og har lært meg HTML, CSS, og JavaScript.
        </p>

        <p itemprop="description">
          Jeg liker å utforske nye teknologier og trender, og å lære av andre
          designere og utviklere. I porteføljen min kan du se noen av
          prosjektene jeg har jobbet med. Jeg håper du finner dem interessante.
        </p>
      </div>
      <img src="/assets/Syver_Giswold_04_12x12.webp" alt="Portrettbilde av Syver Giswold, en ung mann med briller og grå genser" itemprop="image"/>
    </article>
  </section>
  <section id="contact">
    <h2>Kontakt info</h2>
    <div class="contactSection" itemscope itemtype="https://schema.org/ContactPoint">
      <div>
        <p itemprop="description">
          Takk for at du besøker min portefølje. Jeg håper du likte å se på mine
          arbeider og ferdigheter.
        </p>
        <p itemprop="description">
          Hvis du har lyst til å snakke med meg, så er du hjertelig velkommen.
          Det bare å ta kontakt med meg.
        </p>
        <ul>
          <li><span class="bold">Tlf </span><span itemprop="telephone">+47 971 04 751</span></li>
          <li><span class="bold">E-post </span><a href="mailto:SyverGiswold@gmail.com" itemprop="email">SyverGiswold@gmail.com</a></li>
          <li><span class="bold">Bosted </span><span itemprop="address">Sande i Vestfold, Norge</span></li>
        </ul>
        <div class="link_icons">
          <a href="https://github.com/SyverGiswold" target="_blank" itemprop="url">
            <img src="/assets/github.svg" alt="lenke til github" />
          </a>
          <a href="https://www.linkedin.com/in/syver-giswold/" target="_blank" itemprop="url">
            <img src="/assets/linkedin.svg" alt="lenke til linkedin" />
          </a>
        </div>
      </div>
      <div class="divider"></div>
      <div>
        <form on:submit|preventDefault={handleSubmit} itemscope itemtype="https://schema.org/ContactPoint">
          <input
            type="hidden"
            name="access_key"
            value="0def2d92-843a-4f08-b8b9-7d7e00bf8cfd"
          />
          <input
            type="checkbox"
            name="botcheck"
            class="hidden"
            style="display: none;"
          />
          <div>
            <label for="name">Navn</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Navn Navnesen"
              required
              itemprop="name"
            />
          </div>
          <div>
            <label for="email">E-post</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="eksempel@e-post.no"
              required
              itemprop="email"
            />
          </div>
          <div>
            <label for="message">Melding</label>
            <textarea
              id="message"
              name="message"
              placeholder="Send meg en melding"
              required
              rows="5"
              itemprop="messageBody"
            />
          </div>
          <input type="submit" value="Send inn" />
        </form>

        <div class="status">{status}</div>
      </div>
    </div>
  </section>
</main>

<style>
  main {
    flex-direction: column;
  }

  section {
    padding: 80px 0;
    scroll-margin-top: 40px;
  }

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }

  article img {
    width: 50%;
  }

  p {
    margin-bottom: 2rem;
  }

  .cardSection {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  }

  .contactSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .contactSection > * {
    width: 50%;
  }

  li {
    list-style: none;
    margin-top: 1rem;
  }

  li span {
    min-width: 90px;
    display: inline-block;
  }

  .link_icons {
    display: flex;
    gap: 16px;
    margin-top: 1rem;
  }

  .link_icons > a,
  .link_icons > a > img {
    height: 44px;
    width: 44px;
  }

  .divider {
    height: 50vh;
    border: 1px solid var(--primary-text);
    width: 1px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  input {
    background: none;
    padding: 12px;
    border-radius: var(--border-radius);
    border: 2px solid var(--secondary-background);
    line-height: 1.5;
    letter-spacing: 0.12rem;
    word-spacing: 0.16rem;
    width: 100%;
    color: var(--primary-text);
  }

  textarea {
    background: none;
    border-radius: var(--border-radius);
    border: 2px solid var(--secondary-background);
    color: var(--primary-text);
    padding: 12px;
    line-height: 1.5;
    letter-spacing: 0.12rem;
    word-spacing: 0.16rem;
    width: 100%;
    resize: none;
  }

  label {
    display: block;
    padding-bottom: 12px;
  }

  [itemprop="email"] {
    color: var(--primary-text);
  }

  [type="submit"] {
    width: 140px;
    margin: 0 auto;
  }

  [type="submit"]:hover {
    background-color: var(--secondary-background);
    color: var(--tertiary-text);
  }

  .status {
    display: block;
    height: 24px;
    margin-top: 24px;
    text-align: center;
  }

  ::placeholder {
    color: var(--secondary-text);
  }

  @media only screen and (max-width: 1300px) {
    main {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 900px) {
    main {
      flex-direction: column;
    }

    article {
      flex-direction: column;
    }

    article img {
      width: 100%;
    }

    .contactSection {
      flex-direction: column;
    }

    .contactSection > * {
      width: 100%;
    }

    .contactSection .divider {
      height: 1px;
    }

    .link_icons {
      margin-top: 2rem;
    }

    .link_icons img {
      margin-top: 0;
    }
  }

  @media only screen and (max-width: 375px) {
    h1 {
      line-break: anywhere;
    }
  }
</style>