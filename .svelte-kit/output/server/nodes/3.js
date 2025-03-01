

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CANNjDQr.js","_app/immutable/chunks/B47vXuiC.js","_app/immutable/chunks/DJH_4bDg.js"];
export const stylesheets = ["_app/immutable/assets/index.DtggSJ5a.css"];
export const fonts = [];
