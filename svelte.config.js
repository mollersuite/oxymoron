import adapter from "@sveltejs/adapter-auto"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		output: {
			preloadStrategy: "preload-mjs",
		},
		inlineStyleThreshold: 1500,
		csp: {
			directives: {
				"default-src": ["self"],
			},
		},
	},
}

export default config
