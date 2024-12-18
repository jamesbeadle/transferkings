export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".ic-assets.json",".well-known/ic-domains",".well-known/ii-alternative-origins","Rubik-Regular.woff2","apple-touch-icon.png","background.jpg","favicons/.DS_Store","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/icon-192x192.png","favicons/icon-512x512.png","favicons/mstile-150x150.png","favicons/safari-pinned-tab.svg","manifest.webmanifest","meta-share.jpg","placeholder.png"]),
	mimeTypes: {".json":"application/json",".woff2":"font/woff2",".png":"image/png",".jpg":"image/jpeg",".xml":"text/xml",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.DBDyV3El.js","app":"_app/immutable/entry/app.B14u5c1Q.js","imports":["_app/immutable/entry/start.DBDyV3El.js","_app/immutable/chunks/index.BZ8X_3bo.js","_app/immutable/chunks/vendor.ThHMLpiP.js","_app/immutable/entry/app.B14u5c1Q.js","_app/immutable/chunks/index.BZ8X_3bo.js","_app/immutable/chunks/vendor.ThHMLpiP.js"],"stylesheets":["_app/immutable/assets/index.C-Mw7l9i.css","_app/immutable/assets/index.C-Mw7l9i.css"],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/agent-hub",
				pattern: /^\/agent-hub\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contract-center",
				pattern: /^\/contract-center\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/private-agencies",
				pattern: /^\/private-agencies\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/rules",
				pattern: /^\/rules\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
