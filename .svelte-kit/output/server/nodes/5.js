

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/private-agencies/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.TuCwX-Mr.js","_app/immutable/chunks/index.BZ8X_3bo.js","_app/immutable/chunks/vendor.ThHMLpiP.js"];
export const stylesheets = ["_app/immutable/assets/index.C-Mw7l9i.css"];
export const fonts = [];
