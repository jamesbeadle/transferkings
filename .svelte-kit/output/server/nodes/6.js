

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BFu60aTq.js","_app/immutable/chunks/index.BvVyCdHD.js","_app/immutable/chunks/vendor.BG7nC0CE.js"];
export const stylesheets = ["_app/immutable/assets/index.BRhigEEd.css"];
export const fonts = [];
