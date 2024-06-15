

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.OEsoOoTh.js","_app/immutable/chunks/index.C10wYsOo.js","_app/immutable/chunks/vendor.CKqpTGsw.js"];
export const stylesheets = ["_app/immutable/assets/index.DYCA09tX.css"];
export const fonts = [];
