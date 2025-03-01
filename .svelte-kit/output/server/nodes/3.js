

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DcyIE0N6.js","_app/immutable/chunks/CHSDIip8.js","_app/immutable/chunks/BRSm6mtb.js"];
export const stylesheets = ["_app/immutable/assets/index.Bqt0JysD.css"];
export const fonts = [];
