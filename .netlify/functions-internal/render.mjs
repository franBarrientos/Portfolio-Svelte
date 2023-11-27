import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["F1.png","F2.png","favicon.png","folcode.jpg","java.pdf","myFace.jpg","udemy.avif","udemy.png","unne.avif","unne.png","v1.mp4","v2.mp4","v3.mp4","v4.mp4","work1.png","work2.png","work21.PNG","work22.png","work23.png","work3.png","work4.png","work5.png","work6.png","work7.png","work8.png","work9.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".pdf":"application/pdf",".avif":"image/avif",".mp4":"video/mp4",".PNG":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7e256ee1.js","app":"_app/immutable/entry/app.04e13607.js","imports":["_app/immutable/entry/start.7e256ee1.js","_app/immutable/chunks/scheduler.6edd59ec.js","_app/immutable/chunks/singletons.987e830d.js","_app/immutable/chunks/index.7941f33e.js","_app/immutable/entry/app.04e13607.js","_app/immutable/chunks/scheduler.6edd59ec.js","_app/immutable/chunks/index.665c95d0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js'))
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
				id: "/projects/freshcoffe",
				pattern: /^\/projects\/freshcoffe\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects/treshermanitos",
				pattern: /^\/projects\/treshermanitos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
