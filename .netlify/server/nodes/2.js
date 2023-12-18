

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.880cd714.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.3abede45.js","_app/immutable/chunks/navigation.51c72038.js","_app/immutable/chunks/singletons.554e10fe.js"];
export const stylesheets = ["_app/immutable/assets/2.56a520df.css","_app/immutable/assets/navigation.538c35ed.css"];
export const fonts = [];
