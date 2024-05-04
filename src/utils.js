export function isEmpty(element) {
	if (element === null || element === undefined) return true

	if (typeof element === 'string') {
		return element === ''
	}

	if (typeof element === 'object') {
		return Object.keys(element).length === 0
	}

	return false
}

export const compose = (...fns) =>
	fns.reduce(
		(f, g) =>
			async (...args) =>
				g(await f(...args))
	)
