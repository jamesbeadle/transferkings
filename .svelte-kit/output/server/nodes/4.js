

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/terms/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.B0QHxKMv.js","_app/immutable/chunks/B2DWRmZ1.js","_app/immutable/chunks/BFTEs36L.js"];
export const stylesheets = ["_app/immutable/assets/index.C9uvOtRq.css"];
export const fonts = [];
