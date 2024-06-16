

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.WivBVUMf.js","_app/immutable/chunks/index.BkoxYStk.js","_app/immutable/chunks/vendor.9t2Mje5Y.js"];
export const stylesheets = ["_app/immutable/assets/index.FQ-GZ91z.css"];
export const fonts = [];
