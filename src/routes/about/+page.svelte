<script>
  import Header from "$lib/components/Header.svelte";
</script>

<Header activeLink="about" />

<main>
  <article>
    <div>
      <h1 class="content-title">Kort om meg</h1>

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
        jeg har jobbet med. Jeg håper du finner dem
        interessante.
      </p>
    </div>
    <img
      src="/assets/Syver_Giswold_04_12x12.webp"
      alt=""
    />
  </article>
</main>

<style>

  main {
    min-height: calc(100vh - 80px);
  }

  p {
    margin-top: 2rem;
  }

  div {
    width: 35%;
  }
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    max-width: 50%;
  }

  @media only screen and (max-width: 900px) {
    main {
      margin-top: 2rem;
    }
  
    div {
      width: 100%;
    }

    img {
      max-width: 75%;
    }

    article {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 650px) {
    img {
      max-width: 100%;
    }
  }
</style>
