import { redirect } from "@sveltejs/kit"
import { fail } from "@sveltejs/kit"

/** @type {import('./$types').Actions} */
export const actions = {
	default: () => {
		redirect(301, "/");
	},
}

/** @type {import('./$types').PageLoad} */
export async function load() {
	return {
		footer: false
	}
}
export const csr = true
