

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contract-center/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BuHJxbDO.js","_app/immutable/chunks/index.BkoxYStk.js","_app/immutable/chunks/vendor.9t2Mje5Y.js"];
export const stylesheets = ["_app/immutable/assets/index.FQ-GZ91z.css"];
export const fonts = [];
