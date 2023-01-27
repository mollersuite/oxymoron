/** @param {string} string */
const hash = string => crypto.subtle.digest("SHA-256", new TextEncoder().encode(string)).then(hash => Array.from(new Uint8Array(hash)))

/**
 * @param {string} username
 */
export default async function generate(username) {
	const bits = await hash(username)
	const shapes = [
		[150.23, 88.57, 21.6],
		[147.72, 180.01, 34.62],
		[232.88, 192.82, 21.6],
		[240.26, 108.78, 46.65],
		[215.78, 281.72, 56.14],
	].map(([x, y, radius], i) => {
		const base = i * 4
		return {
			type: bits[base] % 2,
			rotation: Math.floor((bits[base + 1] / 255) * 360),
			color: `hsl(${Math.floor((bits[base + 2] / 255) * 360)}, 100%, 50%)`,
			x,
			y,
			radius,
		}
	})

	return `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" style="background-color:black;">
			${shapes
				.map(shape =>
					`<${["circle", "polygon"][shape.type]}
					cx="${shape.x}"
					cy="${shape.y}"
					r="${shape.radius}"
					fill="${shape.color}"
					stroke-width="1"
					transform="rotate(${shape.rotation} ${shape.x} ${shape.y})"
					
					points="${shape.x + shape.radius * Math.cos(0)}, ${shape.y + shape.radius * Math.sin(0)} ${shape.x + shape.radius * Math.cos((2 * Math.PI) / 3)}, ${shape.y + shape.radius * Math.sin((2 * Math.PI) / 3)} ${shape.x + shape.radius * Math.cos((4 * Math.PI) / 3)}, ${shape.y + shape.radius * Math.sin((4 * Math.PI) / 3)}"
					

				/>`.trim()
				)
				.join("\n")}
		</svg>
	`
}
