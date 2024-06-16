

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BDxAoQQi.js","_app/immutable/chunks/index.BZ8X_3bo.js","_app/immutable/chunks/vendor.ThHMLpiP.js"];
export const stylesheets = ["_app/immutable/assets/index.C-Mw7l9i.css"];
export const fonts = [];
