

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.63b69271.js","_app/immutable/chunks/scheduler.6edd59ec.js","_app/immutable/chunks/index.665c95d0.js","_app/immutable/chunks/bundle-mjs.3a10394b.js","_app/immutable/chunks/index.7941f33e.js","_app/immutable/chunks/index.48acd5fb.js","_app/immutable/chunks/gitHub.0e6391c4.js","_app/immutable/chunks/stores.496d665a.js","_app/immutable/chunks/singletons.987e830d.js"];
export const stylesheets = ["_app/immutable/assets/0.be34b0ef.css"];
export const fonts = [];
