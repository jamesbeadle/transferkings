

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BY1rEYm4.js","_app/immutable/chunks/index.DLpM-8E2.js","_app/immutable/chunks/vendor.Dp3VSTVD.js"];
export const stylesheets = ["_app/immutable/assets/index.BRhigEEd.css"];
export const fonts = [];
