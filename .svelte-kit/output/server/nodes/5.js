

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/private-agencies/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DougbHbb.js","_app/immutable/chunks/index.TsJgvgDq.js","_app/immutable/chunks/vendor.DvmIKu4M.js"];
export const stylesheets = ["_app/immutable/assets/index.BuFThjPp.css"];
export const fonts = [];
