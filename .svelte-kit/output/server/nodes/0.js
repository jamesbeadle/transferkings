

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BD2J3c4n.js","_app/immutable/chunks/CHSDIip8.js","_app/immutable/chunks/BRSm6mtb.js"];
export const stylesheets = ["_app/immutable/assets/index.Bqt0JysD.css"];
export const fonts = [];
