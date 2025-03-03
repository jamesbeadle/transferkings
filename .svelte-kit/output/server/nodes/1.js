

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BYx8khpI.js","_app/immutable/chunks/U4PVxs2w.js","_app/immutable/chunks/vbJKIisJ.js"];
export const stylesheets = ["_app/immutable/assets/index.CedxDUwz.css"];
export const fonts = [];
