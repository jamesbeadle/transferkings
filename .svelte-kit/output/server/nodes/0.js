

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DK6_Myhj.js","_app/immutable/chunks/index.BvVyCdHD.js","_app/immutable/chunks/vendor.BG7nC0CE.js"];
export const stylesheets = ["_app/immutable/assets/index.BRhigEEd.css"];
export const fonts = [];
