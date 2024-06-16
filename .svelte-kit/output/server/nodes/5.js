

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/private-agencies/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CWNC8bVb.js","_app/immutable/chunks/index.DLpM-8E2.js","_app/immutable/chunks/vendor.Dp3VSTVD.js"];
export const stylesheets = ["_app/immutable/assets/index.BRhigEEd.css"];
export const fonts = [];
