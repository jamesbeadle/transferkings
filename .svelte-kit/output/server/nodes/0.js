

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C7S3dI_T.js","_app/immutable/chunks/DYzVRX26.js","_app/immutable/chunks/DRIKydh2.js"];
export const stylesheets = ["_app/immutable/assets/index.Baqa0gNc.css"];
export const fonts = [];
