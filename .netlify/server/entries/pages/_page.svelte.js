import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { o as onNavigate, H as Header } from "../../chunks/navigation.js";
const css = {
  code: "main.svelte-ruslve.svelte-ruslve.svelte-ruslve{min-height:calc(100vh - 80px)}img.svelte-ruslve.svelte-ruslve.svelte-ruslve{aspect-ratio:1 / 1;object-fit:cover}article.svelte-ruslve.svelte-ruslve.svelte-ruslve{width:35%}.gallery-section.svelte-ruslve.svelte-ruslve.svelte-ruslve{display:flex;flex-wrap:wrap;justify-content:center;gap:24px;max-width:50%}.gallery-section.svelte-ruslve>a.svelte-ruslve.svelte-ruslve{flex:0 0 calc(50% - 24px);position:relative}.gallery-section.svelte-ruslve>a.svelte-ruslve>img.svelte-ruslve{max-width:100%;max-height:100%;vertical-align:top}a.svelte-ruslve>span.svelte-ruslve.svelte-ruslve{position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--secondary-background);color:var(--tertiary-text);border-radius:var(--border-radius);opacity:0;transition:opacity 0.3s;display:flex;justify-content:center;align-items:center;text-align:center;text-decoration:none;font-size:var(--h4)}p.svelte-ruslve.svelte-ruslve.svelte-ruslve{margin-top:2rem}@media(hover: hover){.gallery-section.svelte-ruslve>a.svelte-ruslve:hover>span.svelte-ruslve{opacity:1}.gallery-section.svelte-ruslve>a.svelte-ruslve:focus>span.svelte-ruslve{opacity:1}}@media only screen and (max-width: 900px){main.svelte-ruslve.svelte-ruslve.svelte-ruslve{flex-direction:column}article.svelte-ruslve.svelte-ruslve.svelte-ruslve{width:100%;margin-top:2rem}.gallery-section.svelte-ruslve.svelte-ruslve.svelte-ruslve{max-width:100%;margin-top:2rem}img.svelte-ruslve.svelte-ruslve.svelte-ruslve{margin-top:0}}@media only screen and (max-width: 650px){.gallery-section.svelte-ruslve>a.svelte-ruslve.svelte-ruslve{flex:auto}}@media only screen and (max-width: 375px){.gallery-section.svelte-ruslve>a.svelte-ruslve.svelte-ruslve{flex:auto}h1.svelte-ruslve.svelte-ruslve.svelte-ruslve{line-break:anywhere}}",
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
  return `${validate_component(Header, "Header").$$render($$result, { activeLink: "Hjem" }, {}, {})} <main class="svelte-ruslve" data-svelte-h="svelte-1cx9e70"><article class="svelte-ruslve"><h1 class="svelte-ruslve">Prosjekter</h1> <p class="bold svelte-ruslve">Velkommen til porteføljen min!</p> <p class="svelte-ruslve">Her kan du se noen av de spennende og kreative prosjektene jeg har jobbet
      med som interaksjonsdesigner. Jeg har
      kjennskap til verktøy som Figma, Webflow, HTML, CSS, JavaScript, Photoshop, Illustrator, Indesign, After Effects, og Premiere Pro.</p> <p class="svelte-ruslve">Jeg håper du liker å utforske prosjektene mine og se hva jeg har lært og
      oppnådd. Hvis du har noen spørsmål eller tilbakemeldinger så er det bare å
      kontakte meg.</p></article> <section class="gallery-section svelte-ruslve"><a href="./projects/tema_8" class="svelte-ruslve"><img class="image-transition-tema_8 svelte-ruslve" src="/assets/tema_8/Teksteditor_mockup.webp" alt=""> <span class="svelte-ruslve">Tema 8</span></a> <a href="./projects/tema_5" class="svelte-ruslve"><img class="image-transition-tema_5 svelte-ruslve" src="/assets/tema_5/Free_Laptop_Mockup.webp" alt=""> <span class="svelte-ruslve">Tema 5</span></a></section> </main>`;
});
export {
  Page as default
};
