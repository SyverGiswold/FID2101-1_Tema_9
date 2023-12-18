import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
/* empty css                                                     */import { o as onNavigate, H as Header } from "../../../chunks/navigation.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-1oc0yec.svelte-1oc0yec{min-height:calc(100vh - 80px)}p.svelte-1oc0yec.svelte-1oc0yec{margin-top:2rem}span.svelte-1oc0yec.svelte-1oc0yec{width:80px;display:inline-block}li.svelte-1oc0yec.svelte-1oc0yec{list-style:none;margin-top:1rem}.link_icons.svelte-1oc0yec.svelte-1oc0yec{display:flex;gap:16px;margin-top:1rem}.link_icons.svelte-1oc0yec>a.svelte-1oc0yec{height:44px;width:44px}section.svelte-1oc0yec.svelte-1oc0yec{width:35%}.divider.svelte-1oc0yec.svelte-1oc0yec{height:75vh;border:1px solid var(--primary-text)}form.svelte-1oc0yec.svelte-1oc0yec{display:flex;flex-direction:column;gap:24px}input.svelte-1oc0yec.svelte-1oc0yec{background:none;padding:12px;border-radius:var(--border-radius);border:4px solid var(--secondary-background);line-height:1.5;letter-spacing:0.12rem;word-spacing:0.16rem;width:100%;color:var(--primary-text)}textarea.svelte-1oc0yec.svelte-1oc0yec{background:none;border-radius:var(--border-radius);border:4px solid var(--secondary-background);color:var(--primary-text);padding:12px;line-height:1.5;letter-spacing:0.12rem;word-spacing:0.16rem;width:100%;resize:none}label.svelte-1oc0yec.svelte-1oc0yec{display:block;padding-bottom:12px}[type="submit"].svelte-1oc0yec.svelte-1oc0yec{width:140px;margin:0 auto}[type="submit"].svelte-1oc0yec.svelte-1oc0yec:hover{background-color:var(--secondary-background);color:var(--tertiary-text)}.status.svelte-1oc0yec.svelte-1oc0yec{display:block;height:24px;margin-top:24px;text-align:center}.svelte-1oc0yec.svelte-1oc0yec::placeholder{color:var(--secondary-text)}img.svelte-1oc0yec.svelte-1oc0yec{border-radius:0px}@media only screen and (max-width: 900px){main.svelte-1oc0yec.svelte-1oc0yec{flex-direction:column;margin-top:2rem;gap:4rem;min-height:auto}main.svelte-1oc0yec>.svelte-1oc0yec{width:100%}.divider.svelte-1oc0yec.svelte-1oc0yec{height:1px}}',
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
  let status = "";
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, { activeLink: "Kontakt" }, {}, {})} <main class="svelte-1oc0yec"><section class="svelte-1oc0yec" data-svelte-h="svelte-1lq28wr"><h1 class="svelte-1oc0yec">Kontakt info</h1> <div class="svelte-1oc0yec"><p class="svelte-1oc0yec">Takk for at du besøker min portefølje. Jeg håper du likte å se på mine
        arbeider og ferdigheter.</p> <p class="svelte-1oc0yec">Hvis du har lyst til å snakke med meg, så er du hjertelig velkommen. Det
        bare å ta kontakt med meg.</p> <ul class="svelte-1oc0yec"><li class="svelte-1oc0yec"><span class="bold svelte-1oc0yec">Tlf</span>971 04 751</li> <li class="svelte-1oc0yec"><span class="bold svelte-1oc0yec">E-post</span>SyverGiswold@gmail.com</li> <li class="svelte-1oc0yec"><span class="bold svelte-1oc0yec">Bosted</span>Sande i Vestfold</li></ul></div> <div class="link_icons svelte-1oc0yec"><a href="https://github.com/SyverGiswold" target="_blank" class="svelte-1oc0yec"><img src="/assets/github.svg" alt="" class="svelte-1oc0yec"></a> <a href="https://www.linkedin.com/in/syver-giswold/" target="_blank" class="svelte-1oc0yec"><img src="/assets/linkedin.svg" alt="" class="svelte-1oc0yec"></a></div></section> <div class="divider svelte-1oc0yec"></div> <section class="svelte-1oc0yec"><form class="svelte-1oc0yec" data-svelte-h="svelte-1d4pfle"><input type="hidden" name="access_key" value="0def2d92-843a-4f08-b8b9-7d7e00bf8cfd" class="svelte-1oc0yec"> <input type="checkbox" name="botcheck" class="hidden svelte-1oc0yec" style="display: none;"> <div class="svelte-1oc0yec"><label for="name" class="svelte-1oc0yec">Navn</label> <input type="text" name="name" placeholder="Navn Navnesen" required class="svelte-1oc0yec"></div> <div class="svelte-1oc0yec"><label for="email" class="svelte-1oc0yec">E-post</label> <input type="email" name="email" placeholder="eksempel@e-post.no" required class="svelte-1oc0yec"></div> <div class="svelte-1oc0yec"><label for="message" class="svelte-1oc0yec">Melding</label> <textarea name="message" placeholder="Send meg en melding" required rows="5" class="svelte-1oc0yec"></textarea></div> <input type="submit" value="Send inn" class="svelte-1oc0yec"></form> <div class="status svelte-1oc0yec">${escape(status)}</div></section> </main>`;
});
export {
  Page as default
};
