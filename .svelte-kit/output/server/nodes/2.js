

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DGqdIYA9.js","_app/immutable/chunks/index.BuAcy_Nx.js","_app/immutable/chunks/vendor.gN6eJ46M.js"];
export const stylesheets = ["_app/immutable/assets/index.DYCA09tX.css"];
export const fonts = [];
