

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contract-center/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BqC7piyG.js","_app/immutable/chunks/index.TsJgvgDq.js","_app/immutable/chunks/vendor.DvmIKu4M.js"];
export const stylesheets = ["_app/immutable/assets/index.BuFThjPp.css"];
export const fonts = [];
