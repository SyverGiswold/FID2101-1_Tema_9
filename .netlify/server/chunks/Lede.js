import { c as create_ssr_component, e as escape } from "./ssr.js";
/* empty css                                      */
const css$1 = {
  code: "h2.svelte-1jmpjfa{display:flex;align-items:center;text-align:center;margin-top:4rem;line-break:anywhere}h2.svelte-1jmpjfa:before{content:'';flex:1;border-bottom:1px solid var(--secondary-background);margin:0 2rem 0 0}h2.svelte-1jmpjfa:after{content:'';flex:1;border-bottom:1px solid var(--secondary-background);margin:0 0 0 2rem}",
  map: null
};
const Divider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dividerText = "Test" } = $$props;
  if ($$props.dividerText === void 0 && $$bindings.dividerText && dividerText !== void 0)
    $$bindings.dividerText(dividerText);
  $$result.css.add(css$1);
  return `<h2 class="svelte-1jmpjfa">${escape(dividerText)}</h2>`;
});
const css = {
  code: "section.svelte-1tovghk{margin-top:2rem;color:var(--tertiary-text);background-color:var(--secondary-background);padding:1.5rem;border-radius:var(--border-radius)}",
  map: null
};
const Lede = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ledeText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos architecto quisquam ad laborum, aspernatur et. Ut omnis distinctio similique eaque." } = $$props;
  if ($$props.ledeText === void 0 && $$bindings.ledeText && ledeText !== void 0)
    $$bindings.ledeText(ledeText);
  $$result.css.add(css);
  return `<section class="svelte-1tovghk"><p>${escape(ledeText)}</p> </section>`;
});
export {
  Divider as D,
  Lede as L
};
