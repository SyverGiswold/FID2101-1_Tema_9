

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0651ce9a.js","_app/immutable/chunks/scheduler.cbf234a0.js","_app/immutable/chunks/index.200976ee.js","_app/immutable/chunks/stores.969534b4.js","_app/immutable/chunks/singletons.1cf65abf.js","_app/immutable/chunks/index.14349a18.js"];
export const stylesheets = [];
export const fonts = [];