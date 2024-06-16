

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/agent-hub/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Ch3-azL_.js","_app/immutable/chunks/index.BZ8X_3bo.js","_app/immutable/chunks/vendor.ThHMLpiP.js"];
export const stylesheets = ["_app/immutable/assets/index.C-Mw7l9i.css"];
export const fonts = [];
