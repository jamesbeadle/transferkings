

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.FY9YSCfx.js","_app/immutable/chunks/B2DWRmZ1.js","_app/immutable/chunks/BFTEs36L.js"];
export const stylesheets = ["_app/immutable/assets/index.C9uvOtRq.css"];
export const fonts = [];
