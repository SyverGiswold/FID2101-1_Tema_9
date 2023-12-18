import { c as create_ssr_component, e as escape } from "./ssr.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import "./reset.css";@import "./variable.css";@import "./style.css";@import "./animation.css";header.svelte-ne8vap{position:sticky;top:0;left:0;z-index:1;background-color:var(--primary-background);view-transition-name:header;contain:layout;width:100%;height:80px;display:flex;align-items:center;justify-content:center}header.svelte-ne8vap::after{content:"";position:absolute;top:100%;right:0;bottom:0;left:0;background:linear-gradient(180deg, var(--primary-background), transparent);pointer-events:none;height:100px}nav.svelte-ne8vap{display:flex;justify-content:space-between;gap:24px;width:80%;max-width:1500px}.heading.svelte-ne8vap{margin-right:auto}a.svelte-ne8vap{text-decoration:none;color:var(--primary-text)}.link.svelte-ne8vap{display:flex;justify-content:center;align-items:center;color:var(--secondary-text);min-height:44px;min-width:133px;transition:0.3s;font-size:var(--h5);font-weight:400}.active.svelte-ne8vap{color:var(--primary-text);font-weight:700}span.svelte-ne8vap{font-size:var(--h4);font-weight:700}@media(hover: hover){.link.svelte-ne8vap:hover,.link.svelte-ne8vap:focus{font-size:var(--h4);font-weight:700;color:var(--primary-text)}}@media only screen and (max-width: 900px){nav.svelte-ne8vap{margin:0 4rem;width:100%}header.svelte-ne8vap::after{height:50px}}@media only screen and (max-width: 750px){.heading.svelte-ne8vap{display:none}nav.svelte-ne8vap{margin:0 2rem}}@media only screen and (max-width: 650px){header.svelte-ne8vap{padding:0}.link.svelte-ne8vap{min-width:auto}nav.svelte-ne8vap{gap:0;margin:0 1rem}}@media only screen and (max-width: 375px){header.svelte-ne8vap{max-width:100%}}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { activeLink = "" } = $$props;
  if ($$props.activeLink === void 0 && $$bindings.activeLink && activeLink !== void 0)
    $$bindings.activeLink(activeLink);
  $$result.css.add(css);
  return `<header class="svelte-ne8vap"><nav class="svelte-ne8vap"><a class="heading svelte-ne8vap" href="/" data-svelte-h="svelte-zewqv9"><span class="svelte-ne8vap">Syver Giswold</span></a> <a class="${"link " + escape(activeLink === "Hjem" ? "active" : "", true) + " svelte-ne8vap"}" href="/">Hjem</a> <a class="${"link " + escape(activeLink === "Om meg" ? "active" : "", true) + " svelte-ne8vap"}" href="../about">Om meg</a> <a class="${"link " + escape(activeLink === "Kontakt" ? "active" : "", true) + " svelte-ne8vap"}" href="../contact">Kontakt</a></nav> </header>`;
});
const onNavigate = /* @__PURE__ */ client_method("on_navigate");
export {
  Header as H,
  onNavigate as o
};
