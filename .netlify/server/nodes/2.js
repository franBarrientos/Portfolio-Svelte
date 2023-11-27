

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6feb020e.js","_app/immutable/chunks/scheduler.6edd59ec.js","_app/immutable/chunks/index.665c95d0.js","_app/immutable/chunks/Button.4e0d4345.js","_app/immutable/chunks/bundle-mjs.3a10394b.js","_app/immutable/chunks/Indicator.ae29c059.js"];
export const stylesheets = [];
export const fonts = [];
