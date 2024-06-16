

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DBHfXjw1.js","_app/immutable/chunks/index.BZ8X_3bo.js","_app/immutable/chunks/vendor.ThHMLpiP.js"];
export const stylesheets = ["_app/immutable/assets/index.C-Mw7l9i.css"];
export const fonts = [];
