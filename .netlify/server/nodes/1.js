

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.10gyCPFQ.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.TXiEWf6f.js","_app/immutable/chunks/singletons._nvivG03.js"];
export const stylesheets = [];
export const fonts = [];
