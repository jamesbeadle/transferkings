

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DMAeE8AC.js","_app/immutable/chunks/index.BvVyCdHD.js","_app/immutable/chunks/vendor.BG7nC0CE.js"];
export const stylesheets = ["_app/immutable/assets/index.BRhigEEd.css"];
export const fonts = [];
