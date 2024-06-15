

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5EYf0Ya_.js","_app/immutable/chunks/index.BuAcy_Nx.js","_app/immutable/chunks/vendor.gN6eJ46M.js"];
export const stylesheets = ["_app/immutable/assets/index.DYCA09tX.css"];
export const fonts = [];
