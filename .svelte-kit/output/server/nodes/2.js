

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CUXJc7IT.js","_app/immutable/chunks/index.BvVyCdHD.js","_app/immutable/chunks/vendor.BG7nC0CE.js"];
export const stylesheets = ["_app/immutable/assets/index.BRhigEEd.css"];
export const fonts = [];
