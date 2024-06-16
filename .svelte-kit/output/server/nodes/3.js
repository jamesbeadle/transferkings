

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/agent-hub/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.D1pGOact.js","_app/immutable/chunks/index.TsJgvgDq.js","_app/immutable/chunks/vendor.DvmIKu4M.js"];
export const stylesheets = ["_app/immutable/assets/index.BuFThjPp.css"];
export const fonts = [];
