

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.Cg1PL6QR.js","_app/immutable/chunks/DYzVRX26.js","_app/immutable/chunks/DRIKydh2.js"];
export const stylesheets = ["_app/immutable/assets/index.Baqa0gNc.css"];
export const fonts = [];
