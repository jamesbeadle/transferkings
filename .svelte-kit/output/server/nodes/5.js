

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/private-agencies/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DfWDjHcL.js","_app/immutable/chunks/index.BvVyCdHD.js","_app/immutable/chunks/vendor.BG7nC0CE.js"];
export const stylesheets = ["_app/immutable/assets/index.BRhigEEd.css"];
export const fonts = [];
