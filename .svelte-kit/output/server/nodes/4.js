

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.C_DfL7jO.js","_app/immutable/chunks/DaTO8THM.js","_app/immutable/chunks/DMICAZED.js"];
export const stylesheets = ["_app/immutable/assets/index.CoxG5mam.css"];
export const fonts = [];
