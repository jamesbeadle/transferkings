

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BOhZdFXZ.js","_app/immutable/chunks/BlGTlBez.js","_app/immutable/chunks/C4_X_-cZ.js"];
export const stylesheets = ["_app/immutable/assets/index.CP5kfkoD.css"];
export const fonts = [];
