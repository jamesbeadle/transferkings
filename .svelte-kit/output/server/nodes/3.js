

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cards/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.0iNoPnb5.js","_app/immutable/chunks/U4PVxs2w.js","_app/immutable/chunks/vbJKIisJ.js"];
export const stylesheets = ["_app/immutable/assets/index.CedxDUwz.css"];
export const fonts = [];
