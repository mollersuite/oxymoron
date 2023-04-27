import { redirect } from "@sveltejs/kit"
import { fail } from "@sveltejs/kit"

/** @type {import('./$types').Actions} */
export const actions = {
	default: () => {
		throw redirect(301, "/")
	},
}
export const csr = false
