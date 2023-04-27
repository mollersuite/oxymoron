/** @type {import('./$types').PageLoad} */
export const load = () =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve({})
		}, 5000)
	})
