

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Bce8MZnv.js","_app/immutable/chunks/B47vXuiC.js","_app/immutable/chunks/DJH_4bDg.js"];
export const stylesheets = ["_app/immutable/assets/index.DtggSJ5a.css"];
export const fonts = [];
