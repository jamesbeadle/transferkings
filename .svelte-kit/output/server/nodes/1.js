

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CHj_iJKP.js","_app/immutable/chunks/CO20kT-U.js","_app/immutable/chunks/B53VtMC3.js"];
export const stylesheets = ["_app/immutable/assets/index.BS32IzxV.css"];
export const fonts = [];
