<script>
  import Lede from "$lib/components/Lede.svelte";

  import Divider from "$lib/components/Divider.svelte";

  import Header from "$lib/components/Header.svelte";

  import VerticalDivider from "$lib/components/VerticalDivider.svelte";
</script>

<Header />

<main>
  <article>
    <img
      class="image-transition-tema_16"
      src="/assets/tema_5/Free_Laptop_Mockup.webp"
      alt=""
    />
    <h1>Universell utforming rapport</h1>

      <Lede
        ledeText="Rapporten fokuserer på universell utforming og brukervennlighet på Ygg & Lyng sin nettside, og tar for seg både automatisk og manuell testing."
      />

    <p>
      Lenke til rapport: <a
        href="/assets/tema_16/ygg&lyng Tilsynsrapport.pdf"
        target="_blank">ygg&lyng tilsynsrapport</a
      >
    </p>
    <p>
      Lenke til kode kodeeksempler: <a
        href="https://codepen.io/collection/gYyJRq"
        target="_blank">https://codepen.io/collection/gYyJRq</a
      >
    </p>

    <Divider dividerText="Rapportmal"></Divider>

    <p>
      For å sikre en effektiv, strukturert og oversiktlig rapport startet jeg
      med å lage en mal i Google Docs. Denne malen definerte grunnleggende
      elementer som font, skriftstørrelse, paginering og et banner element.
      Banneret ble designet for å hjelpe leseren å holde oversikt på hvilken
      seksjon av rapporten de ser på. Siden rapporten er vesentlig lang, følte
      jeg at dette ville være praktisk.
    </p>

    <img src="/assets/tema_16/Docs_mal.webp" alt="" />

    <Divider dividerText="Manuell testing"></Divider>

    <div>
      <p>
        Den manuelle testingen ble utført for å avdekke potensielle
        tilgjengelighets utfordringer på nettsiden. For å teste
        brukeropplevelsen til personer med synshemminger ble Windows Skjermleser
        og Android Talkback benyttet. Disse verktøyene leser nettsidens innhold,
        og avdekker dermed problemer knyttet til navigasjon, forståelse av
        innhold og bruk av interaktive elementer.
      </p>

      <p>
        Helst skulle jeg brukt <a
          href="https://www.freedomscientific.com/products/software/jaws/"
          target="_blank">Jaws skjermleseren</a
        > siden det er den mest populære skjermleseren på Windows, men dessverre
        må du kjøpe en lisens til programmet.
      </p>
    </div>

    <div>
      <p>
        For å utføre en grundig analyse ble Firefox Inspiser Elementer
        foretrukket fremfor Chrome. Firefox tilbyr nemlig utvidet funksjonalitet
        for tilgjengelighetstesting. Verktøyet “Accessibility Inspector”
        tillater rask og effektiv måling av tekst kontrast, og gir en skala fra
        lavest til høyest kontrast på individuelle tekst elementer. I tillegg
        identifiserer Firefox potensielle tilgjengelighetsproblemer knyttet til
        HTML-elementer og deres attributter.
      </p>

      <img src="/assets/tema_16/Firefox_inspiser_elementer.webp" alt="" />
    </div>

    <Divider dividerText="Automatisk testing"></Divider>

    <p>
      Etter den manuelle testen utførte jeg automatiske tester ved hjelp av
      ulike verktøy:
    </p>
    <div>
      <ul>
        <li>
          <a
            href="https://developer.chrome.com/docs/lighthouse/overview"
            target="_blank">Google Lighthouse:</a
          > Et verktøy integrert i Chrome som evaluerer nettsider basert på ytelse,
          tilgjengelighet, beste praksis og SEO. Lighthouse genererer en rapport
          med konkrete forslag til forbedringer.
        </li>
        <li>
          <a
            href="https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi"
            target="_blank">HeadingsMap (Chrome-utvidelse):</a
          > Visualiserer nettsidens overskriftsstruktur (h1-h6) i et hierarkisk tre,
          og avdekker dermed mangler eller feil i bruken av overskrifter, noe som
          er kritisk for navigasjon for brukere av skjermlesere.
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="https://chromewebstore.google.com/detail/djcglbmbegflehmbfleechkjhmedcopn"
            target="_blank"
            >Siteimprove Accessibility Checker (Chrome-utvidelse):</a
          > Skanner nettsiden for brudd på WCAG-retningslinjene, WAI-ARIA standardene
          og beste praksis. Deretter identifiserer den problemer og gir deg en liste
          med alle feilene på nettsiden.
        </li>
        <li>
          <a
            href="https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg"
            target="_blank">Wappalyzer (Chrome-utvidelse):</a
          > Identifiserer teknologier som brukes på nettsiden, slik som CMS, programmeringsspråk,
          Javascript-bibliotek og plugins. Dette gir innsikt i potensielle årsaker
          til ytelsesproblemer og kompatibilitet utfordringer.
        </li>
      </ul>
    </div>

    <img src="/assets/tema_16/Chrome_utvidelser.webp" alt="" />

    <Divider dividerText="Dokumentasjon av funn"></Divider>

    <p>
      Under testingen ble alle identifiserte brudd på WCAG-retningslinjene nøye
      dokumentert i en separat seksjon. Hvert funn ble kort forklart, supplert
      med referanser til relevante WCAG-kriterier eller andre aktuelle
      ressurser.
    </p>

    <img src="/assets/tema_16/Dokumentasjon_av_funn.webp" alt="" />

    <div>
      <p>
        Hvordan funn ble dokumentert kunne varierte ut fra hvor komplekst et
        problem var, men det som er felles mellom alle funnene var en kort
        forklaring, koblinger til ressurser som wcag eller law of ux, et mer
        utdypet forklaring og et løsningsforslag.
      </p>

      <p>
        To av funnene var unntak hvor jeg lagde en full seksjon av nettsiden fra
        bunnen av. Dette var fordi disse problemene kan være veldig vanskelig å
        forstå hvis du bare leser om dem. I de tilfellene lagde jeg en codepen
        som viser disse nye seksjonene på en responsiv måte. Disse eksemplene
        kan bli funnet her <a
          href="https://codepen.io/search/pens?q=ygg+%26+lyng"
          target="_blank">https://codepen.io/search/pens?q=ygg+%26+lyng</a
        >
      </p>
    </div>

    <img src="/assets/tema_16/codepen.webp" alt="" />

    <p>
      Ut over WCAG-brudd ble også andre brukeropplevelse problemer registrert.
      Disse bestod av elementer som potensielt hindret brukervennlighet, men
      ikke nødvendigvis brøt WCAG. Disse funnene ble dokumentert separat for
      senere utdyping.
    </p>

    <Divider dividerText="Utdyping av andre funn"></Divider>

    <p>
      Etter å ha fullført den manuelle og automatiske testen, gikk jeg i dybden
      på de andre funnene. Hvert problem ble dokumentert tilsvarende som wcag
      problemene, og det ble gitt konkrete forslag til forbedringer basert på
      prinsipper for universell utforming og brukervennlighet.
    </p>

    <Divider dividerText="Oppsummering av rapporten"></Divider>

    <p>
      For å gi en kortfattet oversikt over de viktigste problemstillingene,
      skrev jeg en oppsummering. Denne seksjonen presenterte de mest kritiske
      funnene, samt en kort forklaring på hvorfor disse er problematiske for
      brukervennligheten og tilgjengeligheten.
    </p>

    <Divider dividerText="Ressurser og referanser"></Divider>

    <div>
      <p>
        Avslutningsvis inkluderte jeg en liste over alle ressurser og verktøy som
        ble benyttet under utarbeidelsen av rapporten. Dette omfattet lenker til
        automatiske og manuelle testverktøy, relevante WCAG-kriterier, lovverk
        knyttet til personvern, generelle ressurser for universell utforming og
        kodeeksempler.
      </p>

      <p>
        Ved å følge denne strukturerte og kronologiske prosessen, sikret jeg en
        grundig og informativ tilsynsrapport som gir Ygg & Lyng et solid grunnlag
        for å forbedre nettsidens tilgjengelighet og brukeropplevelse.
      </p>
    </div>

  </article>
</main>

<style>
  main {
    display: block;
  }

  iframe {
    border: 1px solid var(--secondary-background);
    border-radius: var(--border-radius);
    width: 100%;
    height: 600px;
    max-height: 80vh;
  }

  article > * {
    margin-top: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 4rem;
  }

  article {
    padding: 48px 0;
  }

  article > div {
    display: flex;
    gap: 2rem;
    flex-grow: 0;
    flex-shrink: 0;
    align-items: flex-start;
  }

  li {
    list-style: none;
    margin-top: 2rem;
  }

  div > * {
    width: calc(50% - 1rem);
  }

  .persona > p {
    margin-top: 2rem;
  }

  .margin-top {
    margin-top: 2rem;
  }

  p {
    width: 100%;
  }

  ul {
    width: 100%;
  }

  a {
    color: var(--primary-color);
    font-weight: 700;
    line-break: anywhere;
  }

  .persona > div {
    width: 100%;
    display: flex;
    gap: 48px;
  }

  @media only screen and (max-width: 900px) {
    .persona_section {
      flex-direction: column;
    }

    .persona {
      width: auto;
    }
  }

  @media only screen and (max-width: 750px) {
    article > div {
      flex-direction: column;
    }

    div > * {
      width: 100%;
    }

    .persona > div > img {
      width: 50%;
    }
  }

  @media only screen and (max-width: 500px) {
    .persona > div {
      flex-direction: column;
    }

    .persona > div > img {
      width: 100%;
    }
  }
</style>
