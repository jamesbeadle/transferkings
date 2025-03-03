

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cards/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.sOXiqilg.js","_app/immutable/chunks/DaTO8THM.js","_app/immutable/chunks/DMICAZED.js"];
export const stylesheets = ["_app/immutable/assets/index.CoxG5mam.css"];
export const fonts = [];
