

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CyX8p_CB.js","_app/immutable/chunks/BlGTlBez.js","_app/immutable/chunks/C4_X_-cZ.js"];
export const stylesheets = ["_app/immutable/assets/index.CP5kfkoD.css"];
export const fonts = [];
