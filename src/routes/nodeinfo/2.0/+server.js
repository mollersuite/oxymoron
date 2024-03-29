import { json } from "@sveltejs/kit"

export function GET() {
	/**
	 * NodeInfo schema version 2.0.
	 * @typedef {object}
	 * @property {"2.0"} version The schema version, must be 2.0.
	 * @property {object} software Metadata about server software in use.
	 * @property {string} software.name The canonical name of this server software.
	 * @property {string} software.version The version of this server software.
	 * @property {string[]} protocols The protocols supported on this server.
	 * @property {object} services The third party sites this server can connect to via their application API.
	 * @property {string[]} services.inbound The third party sites this server can retrieve messages from for combined display with regular traffic.
	 * @property {string[]} services.outbound The third party sites this server can publish messages to on the behalf of a user.
	 * @property {boolean} openRegistrations Whether this server allows open self-registration.
	 * @property {object} usage Usage statistics for this server.
	 * @property {object} usage.users statistics about the users of this server.
	 * @property {number} [usage.users.total] The total amount of on this server registered users.
	 * @property {number} [usage.users.activeHalfyear] The amount of users that signed in at least once in the last 180 days.
	 * @property {number} [usage.users.activeMonth] The amount of users that signed in at least once in the last 30 days.
	 * @property {number} [usage.localPosts] The amount of posts that were made by users that are registered on this server.
	 * @property {number} [usage.localComments] The amount of comments that were made by users that are registered on this server.
	 * @property {object} metadata Free form key value pairs for software specific values. Clients should not rely on any specific key present.
	 */
	const /** @type {nodeinfo} */ nodeinfo = {
			version: "2.0",
			software: {
				name: "oxymoron",
				version: "1.0.0", // TODO: get from package.json
			},
			metadata: {
				nodeName: "Moron Center",
				nodeDescription: "The flagship Oxymoron instance."
			},
			openRegistrations: false,
			protocols: ["activitypub"],
			services: {
				inbound: [],
				outbound: [],
			},
			usage: {
				users: {
					total: 1,
					activeHalfyear: 1,
					activeMonth: 1,
				},
				localPosts: 0,
			},
		}
	return json(nodeinfo)
}
