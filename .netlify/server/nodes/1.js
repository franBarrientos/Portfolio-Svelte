

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6260aa08.js","_app/immutable/chunks/scheduler.6edd59ec.js","_app/immutable/chunks/index.665c95d0.js","_app/immutable/chunks/stores.496d665a.js","_app/immutable/chunks/singletons.987e830d.js","_app/immutable/chunks/index.7941f33e.js"];
export const stylesheets = [];
export const fonts = [];
