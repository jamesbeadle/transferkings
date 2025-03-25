

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Fr5y3ED0.js","_app/immutable/chunks/Bqku3E4y.js","_app/immutable/chunks/DqzQA1q8.js"];
export const stylesheets = ["_app/immutable/assets/index.CA4rm0q5.css"];
export const fonts = [];
