

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.5f4UtCo5.js","_app/immutable/chunks/index.C10wYsOo.js","_app/immutable/chunks/vendor.CKqpTGsw.js"];
export const stylesheets = ["_app/immutable/assets/index.DYCA09tX.css"];
export const fonts = [];
