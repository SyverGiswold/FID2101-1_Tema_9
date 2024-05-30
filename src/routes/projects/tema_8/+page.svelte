<script>
  import Lede from "$lib/components/Lede.svelte";

  import Divider from "$lib/components/Divider.svelte";

  import Header from "$lib/components/Header.svelte";

  import VerticalDivider from "$lib/components/VerticalDivider.svelte";
</script>

<svelte:head>
  <title>Syver's portefølje - Tekst app</title>

  <link rel="alternate" hreflang="en" href="https://syver-g.netlify.app/en/projects/tema_8" />
</svelte:head>

<Header />

<main>
  <article>
    <img
      class="image-transition-tema_8"
      src="/assets/tema_8/MacBook_Dresser_Mockup_4.webp"
      alt=""
    />
    <h1>Tekst app</h1>
    <div>
      <Lede
        ledeText="I denne oppgaven valgte jeg å ta for meg oppgaven å lage en rich text
          editor tilsvarende til TinyMCE og CKEditor som skulle være brukbare med
          kun tastatur."
      />
    </div>

    <iframe
      title="Figma prosjekt fil"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FC5TjViSAMhCqRf18Zun8J0%2FTema-8%3Ftype%3Ddesign%26node-id%3D89%253A2%26mode%3Ddesign%26t%3DMHK3hrncRx2Z5mgd-1"
      allowfullscreen
    ></iframe>

    <p>
      Lenke til github repository: <a
        href="https://github.com/SyverGiswold/FID1200-1_Team_8"
        target="_blank">https://github.com/SyverGiswold/FID2101-1_Tema_8</a
      >
    </p>
    <p>
      Lenke til demo side: <a
        href="https://fid1200-1-tema-8.netlify.app/"
        target="_blank">https://fid1200-1-tema-8.netlify.app/</a
      >
    </p>

    <Divider dividerText="Innsikt"></Divider>

    <div>
      <p>
        Det første jeg startet med i oppgaven var å lage et veldig enkelt test
        program for å se om det var realistisk for meg å kunne lage et tekst
        program på tiden vi var gitt.
      </p>

      <p>
        Da endte jeg opp med dette programmet. Veldig basic funksjonalitet, men
        det viste fremdeles at det var mulig for meg å lage et tekst program.
        Jeg så også på et par forskjellige videoer om å lage tekst program, som
        dette eksemplet. <a
          href="https://www.youtube.com/watch?v=la-0HOaNL10"
          target="_blank">https://www.youtube.com/watch?v=la-0HOaNL10</a
        >
      </p>
    </div>

    <img src="/assets/tema_8/Skjermbilde 2023-06-05 235900.webp" alt="" />

    <div>
      <p>
        Det neste jeg valgte var å skrive en liste over oppgaver jeg måtte gjøre
        får å fullføre oppgaven. Da endte jeg opp med å bruke notion til å
        organisere oppgaven mine. Jeg endte opp med å dele inn oppgaven mine
        under tre hoved kategorier. Research, prototype og utvikling. Lagde alle
        gjøre målene mine valgte jeg å vektlegge utviklingen mest og samtidig
        legge av mest tid til det. Fordi jeg viste det kom til å være den mest
        tid krevende delen.
      </p>

      <img src="/assets/tema_8/Skjermbilde 2023-06-06 000745.webp" alt="" />
    </div>

    <h3>Programvare<wbr>testing</h3>

    <div>
      <p>
        Når jeg startet på research valgte jeg å begynne med å se på andre tekst
        programmer for å få et bedre innblikk i hvordan de fungerer. Programmene
        jeg testet var Notion, Obsidian, Word, OneNote, TinyMCE og CKEditor.
      </p>
      <p>
        Det jeg kom frem til fra disse programmene var at de alle hadde dårlig
        brukervennlighet for folk som bruker tastatur, eller at visse funksjoner
        ikke kan bli brukt uten mus.
      </p>
    </div>

    <div>
      <section>
        <h4>Notion</h4>
        <p class="margin-top">
          Programmet fungerer ganske bra og er enkelt å bruke fordi linje høyder
          og tekst størrelser er satt for deg, men det er ikke mulig å overstyre
          disse standard størrelsene. Får å legge til elementer som lister,
          bullet points eller overskrifter bruker man / commands. Dessverre har
          Notion ikke tatt noe hensyn for folk som ikke kan se eller har nedsatt
          syn, fordi det er ingen skjermleser som er tilgjengelig i web
          versjonen. Skjermleser problemet er løst i den nedlastet versjonen,
          men det er ikke mulig å bytte til veldig mange språk i denne versjonen
          så du får fremdeles ikke skjermleser på norsk.
          <span class="line-break"
            >Et annet problem med notion er at når du bruker keyboard navigasjon
            er det dårlig forklaring på hva knapper gjør. Så de fleste knappene
            har de samme navnene når du navigere mellom sidene dine og notion
            leser ikke navnene på sidene. Da blir det veldig vanskelig å finne
            ut hvilken fil du åpner også klarer jeg heller ikke å finne ut
            hvordan jeg åpner en fil med keyboard navigasjon.</span
          >
        </p>
        <ul>
          <li><h5>Bra</h5></li>
          <li>Er enkelt å bruke og kjapt og lære</li>
          <li>Gjør det enkelt å formatere tekst</li>
          <li>Kan importere komplekse maler</li>
          <li>Veldig enkelt å plassere bilder</li>
          <li><h5>Dårlig</h5></li>
          <li>Dårlig/ufunksjonell keyboard navigasjon</li>
          <li>Ufunksjonell skjermleser</li>
          <li>Kan ikke bestemme linje høyde og tekst størrelse</li>
          <li>Mye og navigere seg gjennom med tastatur</li>
        </ul>
      </section>
      <section>
        <h4>Obsidian</h4>
        <p class="margin-top">
          Obsidian fungerer delvis som en mellomting av Notion og VSCode. En
          stor fordel jeg ser med Obsidian er at du har muligheten til å
          redigere nesten alle hurtigtaster i programmet sånn et det passer best
          mulig for deg. Jeg synes at programmet virker som det har bedre
          funksjonalitet enn Notion, men det er mer å lære seg i form at
          hurtigtaster.<span class="line-break"
            >Obsidian har også et lite problemet med at jeg ikke ser noen enkel
            måte å lage kolonner eller andre tekst formateringer som ikke er å
            endre på tekst størrelse eller lister. Bilder også litt vanskelig å
            plassere fordi jeg finner ingen enkel måte å lagge til bilder som
            ikke tar opp sin egen linje.<span class="line-break"
              >Selv så mener jeg at Notion er lit bedre til å formatere teksten
              enn Obsidian.</span
            ></span
          >
        </p>
        <ul>
          <li><h5>Bra</h5></li>
          <li>Har mye funksjonalitet</li>
          <li>Kan endre hurtigtaster</li>
          <li>Funksjonell skjermleser</li>
          <li><h5>Dårlig</h5></li>
          <li>Kan ikke bestemme linje høyde og tekst størrelse</li>
          <li>Mye å navigere seg gjennom med tastatur</li>
          <li>Komplisert program</li>
          <li>
            Det er ikke veldig enkelt å plassere bilder som ikke dekker hele
            bredden på dokumentet
          </li>
        </ul>
      </section>
    </div>
    <div>
      <section>
        <h4>Word</h4>
        <p class="margin-top">
          Word er ganske bra I den form at du har masse maler og full mulighet
          til å redigere teksten din helt fritt. Når jeg testet Word med
          skjermleser fant jeg ingen problemer som var uoverkommelige, men å
          legge til bilder I Word kan være ganske vanskelig. Det er også nesten
          helt umulig å justere bilde plassering med tastatur alene. Dette er
          ikke bare et problem med tastatur navigasjon. Dette er bare sånn Word
          er.
          <span class="line-break">
            Så langt jeg kunne se fungerte skjermleseren helt perfekt, men Word
            har ekstremt mange knapper så det kan ta veldig lang tid å bruke
            tastatur navigasjon fordi du må gå forbi veldig mange knapper.</span
          >
        </p>
        <ul>
          <li><h5>Bra</h5></li>
          <li>Full kontroll over tekst formatering</li>
          <li>Ser ingen problemer med skjermleser</li>
          <li>Kan navigere hele appen med tastatur</li>
          <li>Kan endre all hurtigtaster</li>
          <li><h5>Dårlig</h5></li>
          <li>For mange knapper</li>
          <li>Ekstremt vanskelig å plaserer bilder</li>
        </ul>
      </section>
      <section>
        <h4>OneNote</h4>
        <p class="margin-top">
          OneNote ser ut til å ha mesteparten de samme funksjonene som Word, men
          de har blitt delvis forenklet som er en fordel sånn at det slipper å
          være så mange knapper du trenger å trykke på for å navigere med
          tastatur.
          <span class="line-break">
            Skjermleseren ser også ut til å fungere perfekt med OneNote, men
            bilde plassering er enda verre i OneNote enn Word. Jeg tror ikke det
            er mulig å skalerer ned bilder uten å bruke musen, men jeg så det
            var mulig å legge til alternativ tekst. Dessverre vet jeg ikke
            hvordan jeg kan gjøre det med tastatur.<span class="line-break">
              OneNote har også en funksjon som lar deg lage tekst bokser hvor
              enn du vil på hele siden og dette har du faktisk mulighet til å
              gjøre med kun tastatur hvis du vil, men det er ikke noe som sier
              hvor du er når du bruker skjermleser.<span class="line-break"
                >Et stort problem med OneNote er at du ikke kan navigere deg
                mellom de forskjellige notatblokkene du har eller mellom sider
                du her i notat blokken.</span
              ></span
            ></span
          >
        </p>
        <ul>
          <li><h5>Bra</h5></li>
          <li>Bra skjermleser</li>
          <li>Bra/enkel tekst formatering</li>
          <li>Ikke for mange knapper</li>
          <li><h5>Dårlig</h5></li>
          <li>Kan ikke navigere gjennom hele appen med tastatur</li>
          <li>Ubrukelig tastatur navigasjon i web app</li>
          <li>Kan ikke endre størrelser på bilder med tastatur</li>
        </ul>
      </section>
    </div>

    <div>
      <section>
        <h4>TinyMCE</h4>
        <p class="margin-top">
          TinyMCE har ganske bra funksjonalitet. Fra så lange jeg kunne se hadde
          jeg ingen problemer med skjermleser. Det var også veldig forenklet med
          hvor mange knapper som var der og de knappene som fantes var gruppert
          under andre elementer sånn at du trykket deg forbi en gruppe
          istedenfor hver eneste knapp. Det var også en hjelp knapp tilgjengelig
          med alle snarveiene som er praktisk.
          <span class="line-break">
            Et problem er at top baren med alle knappene har en tab index på -1
            som gjør at du ikke kan bruke shift tab til å komme deg til
            knappene. Da må du heller trykke alt + F9. Det er et problem hvis du
            sitter på en pc med et nvidea grafikk kort fordi da har du et
            program med den samme snarveien. Så da kan du ikke nå top menyen
            uten å endre den snarveien.<span class="line-break">
              Du kan heller ikke plassere bilder gjennom keyboard alene. Du må
              dra bildet inn i filen og det er heller ikke mulig å plassere
              bilder på en enkel måte med tastatur alene.</span
            ></span
          >
        </p>
        <ul>
          <li><h5>Bra</h5></li>
          <li>Enkel navigasjon(uten nvidea grafikk kort)</li>
          <li>Skjermleser fungerer bra</li>
          <li>Få knapper</li>
          <li>Grupperte knapper</li>
          <li>Har en hjelp knapp</li>
          <li><h5>Dårlig</h5></li>
          <li>Kan ikke plassere bilder med tastatur</li>
          <li>Kan ikke bruke shift tab får å nå top meny</li>
          <li>Kan ikke bestemme font størrelse</li>
        </ul>
      </section>
      <section>
        <h4>CKEditor</h4>
        <p class="margin-top">
          CKEditor ser ut til å fungere ganske likt som TinyMCE og da har mye av
          de samme funksjonene. Noen av de største forskjellene jeg så var at
          CKEditor hadde flere maler for fonter som du kunne bruke. Dette er
          veldig praktisk.
          <span class="line-break">
            Samtidig så jeg det var mulig å plassere bilder og endre på
            størrelsen av bildene sånn at den passer med teksten. Jeg fant ikke
            noen mulighet får å gjøre det med keyboard, men det er bra at du kan
            plassere bildet enkelt.<span class="line-break">
              Et større problem med CKEditor var et jeg ikke fant ut hvordan man
              skulle kunne navigere seg til top menyen uten bruk av mus.<span
                class="line-break"
                >Knappene i top menyen var også mindre organisert enn TinyMCE og
                når jeg skulle navigere mellom dem måtte jeg velge alle
                elementene i knappen før jeg fikk gå videre. Så først markerte
                jeg knappen så grafikken inni knappen.
              </span></span
            ></span
          >
        </p>
        <ul>
          <li><h5>Bra</h5></li>
          <li>Enkelt å plassere bilder</li>
          <li>Har en del maler for tekst formatering.</li>
          <li>Kan plassere videoer</li>
          <li><h5>Dårlig</h5></li>
          <li>Kan ikke bruke shift tab får å nå top meny</li>
          <li>Kan ikke bestemme font størrelse</li>
          <li>
            Vet ikke hvordan jeg navigerer meg til toppen av siden uten mus
          </li>
          <li>Vet ikke om det er mulig å endre bilde størrelse med tastatur</li>
          <li>Mange knapper og navigere gjennom</li>
        </ul>
      </section>
    </div>

    <h3>Personas</h3>
    <p>Jeg hadde også to intervjuer med personer får å lage personas.</p>
    <div class="persona_section">
      <div class="persona">
        <div>
          <ul>
            <li>Navn: Markus Jensen</li>
            <li>Alder: 21 år</li>
            <li>Bosted: Luleå, Sverige</li>
            <li>Yrke: Student</li>
          </ul>
          <img src="/assets/tema_8/persona_1.webp" alt="" />
        </div>
        <p>
          <span class="bold">Hobbyer/Fritidsaktiviteter:</span> I tillegg til å
          spille videospill, liker Markus å trene og opprettholde en sunn
          livsstil. Han prioriterer sin fysiske helse og trener regelmessig for
          å oppnå et godt helbred og en generell følelse av velvære. Markus
          foretrekker individuelle treningsaktiviteter som løping, sykling eller
          styrketrening på egenhånd. Han liker å sette seg mål og utfordre seg
          selv i treningsøktene sine, og han finner tilfredsstillelse i å se
          fremgang og forbedringer over tid. Å holde seg aktiv gir ham energi og
          øker hans generelle livskvalitet.
          <span class="line-break"
            ><span class="bold"
              >Hvorfor han kan ha bruk for en rik tekstredigerings<wbr>programvare:</span
            > Markus har erfaring med tekstredigering gjennom sin programmerings<wbr>bakgrunn.
            Han foretrekker enkle og brukervennlige grensesnitt. Han har ikke tidligere
            brukt tekstredigerings<wbr>programvare som TinyMCE eller CKEditor, men han
            er åpen for å prøve nye verktøy for å forbedre produktiviteten og effektiviteten
            i arbeidet sitt.</span
          >
        </p>
      </div>
      <div class="persona">
        <div>
          <ul>
            <li>Navn: Per Olsen</li>
            <li>Alder: 54 år</li>
            <li>Bosted: Nessoden, Norge</li>
            <li>Yrke: Frontend utvikler/konsulent</li>
          </ul>
          <img src="/assets/tema_8/persona_2.webp" alt="" />
        </div>
        <p>
          <span class="bold">Hobbyer/Fritidsaktiviteter:</span> Per liker å
          bruke fritiden sin til å vedlikeholde huset sitt og utføre ulike
          oppgaver relatert til husarbeid. Han finner glede i å se resultatene
          av sitt eget arbeid når han forbedrer og tar vare på hjemmet sitt. Han
          liker også å lese bøker og lytte til musikk, noe som gir ham
          avslapning og underholdning.
          <span class="line-break">
            <span class="bold"
              >Hvorfor han kan ha bruk for en rik tekstredigerings<wbr>programvare:</span
            > Per har omfattende erfaring med tekstbehandlere gjennom sitt arbeid
            som frontend utvikler/konsulent. Han har brukt forskjellige tekstredigeringsverktøy
            i tidligere jobber, og han ser verdien av å ha en rik tekstredigerings<wbr>programvare
            som kan håndtere fleksibel tekst og funksjoner som bildeinnsetting og
            tabeller. Per lager applikasjoner hvor tekstinnholdet må være mer dynamisk
            og tilpasningsdyktig, og han ønsker å ha et verktøy som kan håndtere
            disse behovene på en enkel måte. Han ser også behovet for alternativ
            tekst til bilder for å sikre god tilgjengelighet for brukerne.</span
          >
        </p>
      </div>
    </div>
    <Divider dividerText="Prototyping"></Divider>
    <h3>Low-fi</h3>
    <div>
      <p>
        Når jeg var ferdig med research startet jeg med en wireframe sånn at jeg
        kunne starte å finne ikoner og få testet ut hvor knappene burde være
        plassert siden jeg skulle bruke tab til keyboard navigasjonen.
        <span class="line-break"
          >Det neste steget for meg var å gjøre det enkle tekst programmet.
          Dette var en prosess jeg brukte lit over 2 uker på fordi dette var
          langt mer komplisert koding enn det jeg kunne. Så mye av Javascripten
          er enten tatt fra nett eller så har jeg skrevet det med hjelp av
          ChatGPT. Jeg startet bare med å legge inn de mest grunnleggende
          funksjonene som. Å stille tekst høyre venstre og midtstilt. Så
          inkluderte jeg også muligheten for å endre tekst størrelse.</span
        >
      </p>
      <img src="/assets/tema_8/Skjermbilde 2023-06-06 003512.webp" alt="" />
    </div>

    <div>
      <p>
        Når jeg brukertestet denne versjonen skulle brukeren skrive den samme
        teksten som er i bildet over og formatere teksten likt. En av
        brukertestene min var gjort med en person som ikke kunne se skjermen.
        Dette var gjort med en knapp som gjorde hele skjermen svart, men kunne
        bare bruke skjermleser og tastaturer. De to andre kunne se, men måtte
        fremdeles bruke tastaturet. Jeg fikk ikke veldig mange konkrete
        tilbakemeldinger fra brukertesten, men jeg fikk noe innspill og
        brukerene fant et par feil som jeg ikke hadde funnet selv uten at andre
        hadde testet programmet. En viktig ting jeg la merke til når folk testet
        var at ingen valgte å sette egne tekst størrelse. Alle ville heller
        bruke de ferdig definerte størrelsene. Så da fjernet jeg muligheten til
        å sette egne størrelser selv om jeg originalt ville ha det fordi det gir
        litt mer frihet til brukeren.
      </p>
      <ul>
        <li style="margin-top: 0;">
          <h4 style="margin-top: 0;">Tilbakemedlinger</h4>
        </li>
        <li>Forvirrende at du må skrive først så kan du gjøre endringer.</li>
        <li>Trenger bekreftelse at knapper blir trykket.</li>
        <li>fontSize element dårlig screen reader.</li>
        <li>De predefinerte h og p taggene fungerer ikke.</li>
        <li>Mulighet til å markere egne ord.</li>
        <li>
          Bilde knappen og lenke knappen ser begge ut som legger til filer.
        </li>
      </ul>
    </div>
    <h3>Hi-fi</h3>
    <div>
      <p>
        Når jeg var ferdig med brukertestene og hadde fikset de største
        problemene startet jeg med å sette opp en landingsside for tekst
        programmet. Jeg hadde en ganske konkret ide på hvordan jeg ville at
        nettsiden skulle se ut. Da lagde jeg et par lit forskjellige varianter i
        Figma. Her er også en video jeg tok inspirasjon fra
        <a
          href="https://www.youtube.com/watch?v=T33NN_pPeNI&t=1s"
          target="_blank">https://www.youtube.com/watch?v=T33NN_pPeNI&t=1s</a
        >
      </p>
      <img src="/assets/tema_8/Skjermbilde 2023-06-06 005736.webp" alt="" />
    </div>
    <p>
      Når det kom til farger hadde jeg fått tilbakemelding at noen helst ville
      at nettsiden skulle være mørk så da valgte jeg å se på noen mørke farge
      paletter. Jeg valgte å bruke den siste farge paletten.
    </p>
    <img src="/assets/tema_8/Skjermbilde 2023-06-06 005443.webp" alt="" />
    <div>
      <p>
        Når det kom til å lage landings siden var det ikke mange problemer jeg
        støtte på. Dette eneste jeg hadde problem med var animasjonen på
        nettsiden. Det var fordi feil element hadde en class med animasjon.
      </p>
      <p>
        Når jeg var ferdig med nettsiden jobbet jeg videre med å prøve og gjøre
        tekst programmet bedre, men når jeg jobbet med det la jeg merke til at
        jeg hadde vært over ambisiøs når jeg hadde settet opp funksjoner jeg
        skulle lage. Jeg endte opp med å kutte ut halvparten av de. Den mest
        kompliserte funksjonen som ble igjen var å legge til bilder.
      </p>
    </div>
    <img src="/assets/tema_8/finished_website.webp" alt="" />
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
