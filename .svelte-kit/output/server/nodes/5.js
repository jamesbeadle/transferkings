

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/private-agencies/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.Bz0CqOBO.js","_app/immutable/chunks/index.BkoxYStk.js","_app/immutable/chunks/vendor.9t2Mje5Y.js"];
export const stylesheets = ["_app/immutable/assets/index.FQ-GZ91z.css"];
export const fonts = [];
