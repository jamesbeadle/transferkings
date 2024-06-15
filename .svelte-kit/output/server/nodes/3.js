

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/agent-hub/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BR3Uk04q.js","_app/immutable/chunks/index.C10wYsOo.js","_app/immutable/chunks/vendor.CKqpTGsw.js"];
export const stylesheets = ["_app/immutable/assets/index.DYCA09tX.css"];
export const fonts = [];
