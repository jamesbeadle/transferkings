

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.Ci4v83oX.js","_app/immutable/chunks/CO20kT-U.js","_app/immutable/chunks/B53VtMC3.js"];
export const stylesheets = ["_app/immutable/assets/index.BS32IzxV.css"];
export const fonts = [];
