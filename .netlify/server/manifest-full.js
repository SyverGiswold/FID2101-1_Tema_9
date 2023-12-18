export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/github.svg","assets/linkedin.svg","assets/svelte-logo.svg","assets/Syver_Giswold_04_12x12.jpg","assets/Syver_Giswold_04_12x12.webp","assets/tema_5/fargepalett.webp","assets/tema_5/finished_website.webp","assets/tema_5/font.webp","assets/tema_5/Free_Laptop_Mockup.webp","assets/tema_5/Handleliste_desktop.webp","assets/tema_5/Handleliste_desktop_2.webp","assets/tema_5/Handleliste_telefon.webp","assets/tema_5/Handleliste_telefon_2.webp","assets/tema_5/komponenter.webp","assets/tema_5/local_storage.webp","assets/tema_5/prototype.webp","assets/tema_5/søppel_knapp_js.webp","assets/tema_8/finished_website.webp","assets/tema_8/persona_1.webp","assets/tema_8/persona_2.webp","assets/tema_8/Skjermbilde 2023-06-05 235900.webp","assets/tema_8/Skjermbilde 2023-06-06 000745.webp","assets/tema_8/Skjermbilde 2023-06-06 002752.webp","assets/tema_8/Skjermbilde 2023-06-06 003512.webp","assets/tema_8/Skjermbilde 2023-06-06 005443.webp","assets/tema_8/Skjermbilde 2023-06-06 005736.webp","assets/tema_8/Teksteditor_mockup.webp","favicon.png","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".webp":"image/webp",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.g5L8p0bP.js","app":"_app/immutable/entry/app.wwGEzZFy.js","imports":["_app/immutable/entry/start.g5L8p0bP.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/singletons._nvivG03.js","_app/immutable/entry/app.wwGEzZFy.js","_app/immutable/chunks/scheduler.V7bLW0bx.js","_app/immutable/chunks/index.TXiEWf6f.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
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
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects/tema_5",
				pattern: /^\/projects\/tema_5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects/tema_8",
				pattern: /^\/projects\/tema_8\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
