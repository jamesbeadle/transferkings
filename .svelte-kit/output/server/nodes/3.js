

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cards/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.7lyeIf2H.js","_app/immutable/chunks/CO20kT-U.js","_app/immutable/chunks/B53VtMC3.js"];
export const stylesheets = ["_app/immutable/assets/index.BS32IzxV.css"];
export const fonts = [];
