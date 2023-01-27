import { redirect } from "@sveltejs/kit"
import { fail } from "@sveltejs/kit"

/** @type {import('./$types').Actions} */
export const actions = {
	default: async event => {
		const form = await event.request.formData()
		const display_name = form.get("display-name")
		const profile_picture = form.get("profile-picture") // File? (Fallback to etcetars)
		const bio = form.get("bio")
		const read_only = form.get("read-only") === "on"

		if (!display_name) return fail(400)

		throw redirect(301, "/")
	},
}
