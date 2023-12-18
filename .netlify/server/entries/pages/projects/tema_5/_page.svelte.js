import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { L as Lede, D as Divider } from "../../../../chunks/Lede.js";
import { o as onNavigate, H as Header } from "../../../../chunks/navigation.js";
/* empty css                                                       */
const css = {
  code: "main.svelte-1q5sl58.svelte-1q5sl58{display:block}iframe.svelte-1q5sl58.svelte-1q5sl58{border:1px solid var(--secondary-background);border-radius:var(--border-radius)}article.svelte-1q5sl58>.svelte-1q5sl58{margin-top:2rem}h1.svelte-1q5sl58.svelte-1q5sl58,h3.svelte-1q5sl58.svelte-1q5sl58{margin-top:4rem}article.svelte-1q5sl58.svelte-1q5sl58{padding:48px 0}article.svelte-1q5sl58>div.svelte-1q5sl58{display:flex;gap:2rem;flex-grow:0;flex-shrink:0;align-items:flex-start}div.svelte-1q5sl58>.svelte-1q5sl58{width:calc(50% - 1rem)}p.svelte-1q5sl58.svelte-1q5sl58{width:100%}a.svelte-1q5sl58.svelte-1q5sl58{color:var(--primary-color);font-weight:700;line-break:anywhere}@media only screen and (max-width: 750px){article.svelte-1q5sl58>div.svelte-1q5sl58{flex-direction:column}div.svelte-1q5sl58>.svelte-1q5sl58{width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  onNavigate((navigation) => {
    if (!document.startViewTransition)
      return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1q5sl58"><article class="svelte-1q5sl58"><img class="image-transition-tema_5 svelte-1q5sl58" src="/assets/tema_5/Free_Laptop_Mockup.webp" alt=""> <h1 class="svelte-1q5sl58" data-svelte-h="svelte-h6kwfy">Tema 5</h1> ${validate_component(Lede, "Lede").$$render(
    $$result,
    {
      ledeText: "I tema 5 oppgaven gikk ut på å lage en handle liste applikasjon i javascript"
    },
    {},
    {}
  )} <iframe width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fc00zwz6qMCZVSkeP7jgpso%2FTema-5%3Ftype%3Ddesign%26node-id%3D4%253A62%26mode%3Ddesign%26t%3D2zN7YQyqJhYaXh2t-1" allowfullscreen class="svelte-1q5sl58"></iframe> <p class="svelte-1q5sl58" data-svelte-h="svelte-pavobx">Lenke til github repository: <a href="https://github.com/SyverGiswold/FID1200-1_Team_5" target="_blank" class="svelte-1q5sl58">https://github.com/SyverGiswold/FID1200-1_Team_5</a></p> ${validate_component(Divider, "Divider").$$render($$result, { dividerText: "Skisser" }, {}, {})} <p class="svelte-1q5sl58" data-svelte-h="svelte-2lb6rw">Jeg startet med å lage noen enkle skisser av hvordan jeg ville at
      handleliste applikasjonen skulle set ut. Både til mobil og dekstop format.</p> <div class="svelte-1q5sl58" data-svelte-h="svelte-a8fvz7"><img src="/assets/tema_5/Handleliste_desktop.webp" alt="" class="svelte-1q5sl58"> <img src="/assets/tema_5/Handleliste_desktop_2.webp" alt="" class="svelte-1q5sl58"></div> <div class="svelte-1q5sl58" data-svelte-h="svelte-1mif77l"><img src="/assets/tema_5/Handleliste_telefon.webp" alt="" class="svelte-1q5sl58"> <img src="/assets/tema_5/Handleliste_telefon_2.webp" alt="" class="svelte-1q5sl58"></div> ${validate_component(Divider, "Divider").$$render($$result, { dividerText: "Brukergrensesnitt" }, {}, {})} <h3 class="svelte-1q5sl58" data-svelte-h="svelte-r1h1n5">fargepalett</h3> <div class="svelte-1q5sl58" data-svelte-h="svelte-8ggver"><p class="svelte-1q5sl58">Når jeg skulle begynne med brukergrensesnittet startet jeg med å finne
        en fargepalett og bestemme meg for en font. Får å velge farger velgte
        jeg å bruke en nettsiden <a href="https://coolors.co/" target="_blank" class="svelte-1q5sl58">https://coolors.co/</a>. Dette var fordi siden generere forskjellige fargepalett som jeg kan
        bruke som inspirasjon.</p> <img src="/assets/tema_5/fargepalett.webp" alt="" class="svelte-1q5sl58"></div> <h3 class="svelte-1q5sl58" data-svelte-h="svelte-1hlyq9d">Font</h3> <div class="svelte-1q5sl58" data-svelte-h="svelte-ow7kum"><p class="svelte-1q5sl58">Når jeg valgte font brukt jeg roboto fordi det er en ren og moderne font
        som er lett leselig som var spesifikt designet for telefoner som passer
        bra til en handleliste nettside.</p> <img src="/assets/tema_5/font.webp" alt="" class="svelte-1q5sl58"></div> <h3 class="svelte-1q5sl58" data-svelte-h="svelte-1k1q15m">komponenter</h3> <div class="svelte-1q5sl58" data-svelte-h="svelte-1y8wze0"><p class="svelte-1q5sl58">Ikonene til komponentene var tegnet selv. Dette var fordi jeg ikke
        skulle ha mange ikoner og da kunne det fort ta meg lengre tid å finne
        ikoner jeg kunne bruke på nett istedenfor å heller tegne dem selv.</p> <img src="/assets/tema_5/komponenter.webp" alt="" class="svelte-1q5sl58"></div> ${validate_component(Divider, "Divider").$$render($$result, { dividerText: "Prototype" }, {}, {})} <div class="svelte-1q5sl58" data-svelte-h="svelte-1ke43gr"><p class="svelte-1q5sl58">Når jeg startet å lage prototypen fokuserte jeg på hvordan jeg kunne
        lage handleliste så enkel å forstå så mulig. Da valgte jeg å ha et rent
        og enkelt utsende. Alle knappene på nettsiden er også 48px minimum får
        ha det enkelt for alle å trykke på. Med store font størrelser i tillegg
        til at hele nettsiden er skalerbar til under 320px bredde.</p> <img src="/assets/tema_5/prototype.webp" alt="" class="svelte-1q5sl58"></div> ${validate_component(Divider, "Divider").$$render($$result, { dividerText: "Nettside" }, {}, {})} <div class="svelte-1q5sl58" data-svelte-h="svelte-r6fe4k"><p class="svelte-1q5sl58">I Javascript filen jeg passet på å gjøre hele shopping listen mulig å
        navigere kun med tastatur hvis man foretrekker det og for enkelhets
        skyld kan man trykke enter når input feltet på nettsiden er markert får
        å legge til ting i listen.
        <span class="line-break">På søpplebøtte ikonet jeg har på nettsiden la jeg til en mouseover
          effekt som endrer ikonet får å gjøre det mer tydelig at ikonet er
          markert og samtidig er hover effekten kun aktiv på pc får å ikke skape
          problemer på telefon.</span></p> <img src="/assets/tema_5/søppel_knapp_js.webp" alt="" class="svelte-1q5sl58"></div> <div class="svelte-1q5sl58" data-svelte-h="svelte-1d5tcy4"><p class="svelte-1q5sl58">Jeg har også inkludert local storage i Javascript filen sånn at det er
        mulig for folk å bruke nettsiden legge til tingene de skal kjøpe også
        senere åpne nettsiden igjen får å hentet tilbake samme liste.</p> <p class="svelte-1q5sl58">For meg var det ganske problematisk å få lagd local storage i denne
        oppgaven fordi jeg aldri har jobbet med JavaScript før denne oppgaven
        i tillegg måtte jeg lage en array ut av alt jeg skulle lagre i local
        storage.</p></div> <div class="svelte-1q5sl58" data-svelte-h="svelte-b0ng4f"><p class="svelte-1q5sl58">Originalt når jeg implementerte local storage lagret jeg bare html, men
        siden det er en usikker måte å gjøre det på måtte jeg finne andre
        løsninger og da ble svaret å konvertere elementer fra html filen over
        til string. Første variant av dette hadde jeg to funksjoner til å
         legge til elementer i html og en for å ta html elementene og
        konvertere det over til string som ble lagret i local storage. Dette var
        et ueffektivt system der jeg måtte repetere alt jeg hadde i html og local
        storage funksjon to ganger.
        <span class="line-break">I den siste versjonen jeg bruker nå har jeg fått blandet html
          funksjonen sammen med local storage funksjonen sånn at jeg ungår mest
          mulig repetisjon.</span></p> <img src="/assets/tema_5/local_storage.webp" alt="" class="svelte-1q5sl58"></div> <img src="/assets/tema_5/finished_website.webp" alt="" class="svelte-1q5sl58"></article> </main>`;
});
export {
  Page as default
};
