

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DQePR3cR.js","_app/immutable/chunks/CHSDIip8.js","_app/immutable/chunks/BRSm6mtb.js"];
export const stylesheets = ["_app/immutable/assets/index.Bqt0JysD.css"];
export const fonts = [];
