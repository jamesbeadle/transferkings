

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BIrUJu22.js","_app/immutable/chunks/Df6TWxTr.js","_app/immutable/chunks/DIcIrt1g.js"];
export const stylesheets = ["_app/immutable/assets/index.ibpvf4ZB.css"];
export const fonts = [];
