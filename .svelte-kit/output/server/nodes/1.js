

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BXJGgq8Y.js","_app/immutable/chunks/BlGTlBez.js","_app/immutable/chunks/C4_X_-cZ.js"];
export const stylesheets = ["_app/immutable/assets/index.CP5kfkoD.css"];
export const fonts = [];
