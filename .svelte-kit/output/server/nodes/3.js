

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cards/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.OiHq4O48.js","_app/immutable/chunks/BlGTlBez.js","_app/immutable/chunks/C4_X_-cZ.js"];
export const stylesheets = ["_app/immutable/assets/index.CP5kfkoD.css"];
export const fonts = [];
