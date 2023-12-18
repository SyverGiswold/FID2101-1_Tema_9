

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.c3f02a7a.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.3abede45.js","_app/immutable/chunks/navigation.7d1390bc.js","_app/immutable/chunks/singletons.a7088607.js"];
export const stylesheets = ["_app/immutable/assets/3.73146ada.css","_app/immutable/assets/navigation.538c35ed.css"];
export const fonts = [];
