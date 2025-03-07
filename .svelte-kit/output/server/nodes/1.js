

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.C3jZvN_R.js","_app/immutable/chunks/DYzVRX26.js","_app/immutable/chunks/DRIKydh2.js"];
export const stylesheets = ["_app/immutable/assets/index.Baqa0gNc.css"];
export const fonts = [];
