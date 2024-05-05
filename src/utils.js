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

export function isNaN(num) {
	return isEmpty(num) || window.isNaN(num)
}

export const compose = (...fns) =>
	fns.reduce(
		(f, g) =>
			async (...args) =>
				g(await f(...args))
	)

export const debounce = (fn, delay = 0) => {
	let lastTimestamp, lastCallArgs, id
	return (...args) => {
		if (!lastTimestamp || Date.now() - lastTimestamp >= delay) {
			lastTimestamp = Date.now()
			if (id) {
				clearInterval(id)
				id = null
			}
			return fn(...args)
		}

		lastCallArgs = args

		id = setTimeout(() => {
			if (!isEmpty(lastCallArgs) && Date.now() - lastTimestamp >= delay) {
				fn(...lastCallArgs)
				lastCallArgs = null
			}
		}, delay)
	}
}

export function toSentenceCase(s) {
	if (isEmpty(s)) return s
	return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}
