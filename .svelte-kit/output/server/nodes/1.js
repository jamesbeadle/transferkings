

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DUNyCJ8g.js","_app/immutable/chunks/index.C10wYsOo.js","_app/immutable/chunks/vendor.CKqpTGsw.js"];
export const stylesheets = ["_app/immutable/assets/index.DYCA09tX.css"];
export const fonts = [];
