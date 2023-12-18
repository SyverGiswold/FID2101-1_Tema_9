

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.WMUZ0A0R.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.TXiEWf6f.js","_app/immutable/chunks/navigation.F-iTut3K.js","_app/immutable/chunks/singletons._nvivG03.js"];
export const stylesheets = ["_app/immutable/assets/3.L4OaBVpg.css","_app/immutable/assets/navigation.lF4OfrVa.css"];
export const fonts = [];
