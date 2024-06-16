

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contract-center/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.Ds7GL0Pq.js","_app/immutable/chunks/index.DLpM-8E2.js","_app/immutable/chunks/vendor.Dp3VSTVD.js"];
export const stylesheets = ["_app/immutable/assets/index.BRhigEEd.css"];
export const fonts = [];
