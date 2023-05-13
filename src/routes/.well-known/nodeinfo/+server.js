import { json } from "@sveltejs/kit"

export async function GET({ url }) {
	return json({
		links: [
			{
				rel: "http://nodeinfo.diaspora.software/ns/schema/2.0",
				href: `${url.origin}/nodeinfo/2.0`,
			},
		],
	})
}
