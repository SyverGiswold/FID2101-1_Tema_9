import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { o as onNavigate, H as Header } from "../../../chunks/navigation.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-6dwaan{min-height:calc(100vh - 80px)}p.svelte-6dwaan{margin-top:2rem}div.svelte-6dwaan{width:35%}article.svelte-6dwaan{display:flex;justify-content:space-between;align-items:center}img.svelte-6dwaan{max-width:50%}@media only screen and (max-width: 900px){main.svelte-6dwaan{margin-top:2rem}div.svelte-6dwaan{width:100%}img.svelte-6dwaan{max-width:75%}article.svelte-6dwaan{flex-direction:column}}@media only screen and (max-width: 650px){img.svelte-6dwaan{max-width:100%}}",
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
  return `${validate_component(Header, "Header").$$render($$result, { activeLink: "Om meg" }, {}, {})} <main class="svelte-6dwaan" data-svelte-h="svelte-qobr3t"><article class="svelte-6dwaan"><div class="svelte-6dwaan"><h1 class="content-title">Kort om meg</h1> <p class="svelte-6dwaan">Jeg er en interaksjonsdesign student som er lidenskapelig opptatt av å
        skape brukervennlige og estetiske løsninger for digitale produkter. Jeg
        har erfaring med å designe og utvikle interaktive prototyper,
        brukertester, wireframes og mockups. Jeg har også interesse for frontend
        utvikling og har lært meg HTML, CSS, og JavaScript.</p> <p class="svelte-6dwaan">Jeg liker å utforske nye teknologier og trender, og å lære av andre
        designere og utviklere. I porteføljen min kan du se noen av prosjektene
        jeg har jobbet med. Jeg håper du finner dem
        interessante.</p></div> <img src="/assets/Syver_Giswold_04_12x12.webp" alt="" class="svelte-6dwaan"></article> </main>`;
});
export {
  Page as default
};
