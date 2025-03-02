

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CyxRRKEQ.js","_app/immutable/chunks/Df6TWxTr.js","_app/immutable/chunks/DIcIrt1g.js"];
export const stylesheets = ["_app/immutable/assets/index.ibpvf4ZB.css"];
export const fonts = [];
