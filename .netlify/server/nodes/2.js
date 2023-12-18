

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.aHmkEDy6.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.TXiEWf6f.js","_app/immutable/chunks/navigation.F-iTut3K.js","_app/immutable/chunks/singletons._nvivG03.js"];
export const stylesheets = ["_app/immutable/assets/2.g-l4SiSE.css","_app/immutable/assets/navigation.lF4OfrVa.css"];
export const fonts = [];
