

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B4jeMDsl.js","_app/immutable/chunks/index.DLpM-8E2.js","_app/immutable/chunks/vendor.Dp3VSTVD.js"];
export const stylesheets = ["_app/immutable/assets/index.BRhigEEd.css"];
export const fonts = [];
