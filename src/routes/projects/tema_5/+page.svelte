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
      class="image-transition-tema_5"
      src="/assets/tema_5/Free_Laptop_Mockup.webp"
      alt=""
    />

    <h1>Handleliste app</h1>

    <div>
      <Lede
        ledeText="I tema 5 oppgaven gikk ut på å lage en handleliste applikasjon i javascript"
      />
    </div>

    <iframe
      title="Figma prosjekt fil"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fc00zwz6qMCZVSkeP7jgpso%2FTema-5%3Ftype%3Ddesign%26node-id%3D4%253A62%26mode%3Ddesign%26t%3D2zN7YQyqJhYaXh2t-1"
      allowfullscreen
    ></iframe>

    <p>
      Lenke til github repository: <a
        href="https://github.com/SyverGiswold/FID1200-1_Team_5"
        target="_blank">https://github.com/SyverGiswold/FID1200-1_Team_5</a
      >
    </p>
    <p>
      Lenke til demo side: <a
        href="https://fid1200-1-tema-5-shopping-list.netlify.app/"
        target="_blank">https://fid1200-1-tema-5-shopping-list.netlify.app/</a
      >
    </p>

    <Divider dividerText="Skisser"></Divider>

    <p>
      Jeg startet med å lage noen enkle skisser av hvordan jeg ville at
      handleliste applikasjonen skulle set ut. Både til mobil og dekstop format.
    </p>
    <div>
      <img src="/assets/tema_5/Handleliste_desktop.webp" alt="" />
      <img src="/assets/tema_5/Handleliste_desktop_2.webp" alt="" />
    </div>
    <div>
      <img src="/assets/tema_5/Handleliste_telefon.webp" alt="" />
      <img src="/assets/tema_5/Handleliste_telefon_2.webp" alt="" />
    </div>

    <Divider dividerText="Brukergrensesnitt"></Divider>
    <h3>fargepalett</h3>
    <div>
      <p>
        Når jeg skulle begynne med brukergrensesnittet startet jeg med å finne
        en fargepalett og bestemme meg for en font. Får å velge farger velgte
        jeg å bruke en nettsiden <a href="https://coolors.co/" target="_blank"
          >https://coolors.co/</a
        >. Dette var fordi siden generere forskjellige fargepalett som jeg kan
        bruke som inspirasjon.
      </p>
      <img src="/assets/tema_5/fargepalett.webp" alt="" />
    </div>
    <h3>Font</h3>
    <div>
      <p>
        Når jeg valgte font brukt jeg roboto fordi det er en ren og moderne font
        som er lett leselig som var spesifikt designet for telefoner som passer
        bra til en handleliste nettside.
      </p>
      <img src="/assets/tema_5/font.webp" alt="" />
    </div>
    <h3>komponenter</h3>
    <div>
      <p>
        Ikonene til komponentene var tegnet selv. Dette var fordi jeg ikke
        skulle ha mange ikoner og da kunne det fort ta meg lengre tid å finne
        ikoner jeg kunne bruke på nett istedenfor å heller tegne dem selv.
      </p>
      <img src="/assets/tema_5/komponenter.webp" alt="" />
    </div>
    <Divider dividerText="Prototype"></Divider>
    <div>
      <p>
        Når jeg startet å lage prototypen fokuserte jeg på hvordan jeg kunne
        lage handleliste så enkel å forstå så mulig. Da valgte jeg å ha et rent
        og enkelt utsende. Alle knappene på nettsiden er også 48px minimum får
        ha det enkelt for alle å trykke på. Med store font størrelser i tillegg
        til at hele nettsiden er skalerbar til under 320px bredde.
      </p>
      <img src="/assets/tema_5/prototype.webp" alt="" />
    </div>
    <Divider dividerText="Nettside"></Divider>
    <div>
      <p>
        I Javascript filen jeg passet på å gjøre hele shopping listen mulig å
        navigere kun med tastatur hvis man foretrekker det og for enkelhets
        skyld kan man trykke enter når input feltet på nettsiden er markert får
        å legge til ting i listen.
        <span class="line-break"
          >På søpplebøtte ikonet jeg har på nettsiden la jeg til en mouseover
          effekt som endrer ikonet får å gjøre det mer tydelig at ikonet er
          markert og samtidig er hover effekten kun aktiv på pc får å ikke skape
          problemer på telefon.</span
        >
      </p>
      <img src="/assets/tema_5/søppel_knapp_js.webp" alt="" />
    </div>
    <div>
      <p>
        Jeg har også inkludert local storage i Javascript filen sånn at det er
        mulig for folk å bruke nettsiden legge til tingene de skal kjøpe også
        senere åpne nettsiden igjen får å hentet tilbake samme liste.
      </p>
      <p>
        For meg var det ganske problematisk å få lagd local storage i denne
        oppgaven fordi jeg aldri har jobbet med JavaScript før denne oppgaven i
        tillegg måtte jeg lage en array ut av alt jeg skulle lagre i local
        storage.
      </p>
    </div>
    <div>
      <p>
        Originalt når jeg implementerte local storage lagret jeg bare html, men
        siden det er en usikker måte å gjøre det på måtte jeg finne andre
        løsninger og da ble svaret å konvertere elementer fra html filen over
        til string. Første variant av dette hadde jeg to funksjoner til å legge
        til elementer i html og en for å ta html elementene og konvertere det
        over til string som ble lagret i local storage. Dette var et ueffektivt
        system der jeg måtte repetere alt jeg hadde i html og local storage
        funksjon to ganger.
        <span class="line-break"
          >I den siste versjonen jeg bruker nå har jeg fått blandet html
          funksjonen sammen med local storage funksjonen sånn at jeg ungår mest
          mulig repetisjon.</span
        >
      </p>
      <img src="/assets/tema_5/local_storage.webp" alt="" />
    </div>
    <img src="/assets/tema_5/finished_website.webp" alt="" />
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

  @media only screen and (max-width: 750px) {
    article > div {
      flex-direction: column;
    }

    div > * {
      width: 100%;
    }
  }
</style>
