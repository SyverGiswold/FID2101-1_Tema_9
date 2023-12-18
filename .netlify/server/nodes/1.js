

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b6352f00.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.3abede45.js","_app/immutable/chunks/singletons.554e10fe.js"];
export const stylesheets = [];
export const fonts = [];
