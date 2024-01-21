import adapter from "@sveltejs/adapter-auto"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		output: {
			preloadStrategy: "modulepreload",
		},
		inlineStyleThreshold: 1500,
		// csp: {
		// 	directives: {
		// 		"default-src": ["self"],
		// 	},
		// },
	},
}

export default config
