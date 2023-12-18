

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.1lkM3Y1F.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.TXiEWf6f.js"];
export const stylesheets = [];
export const fonts = [];
