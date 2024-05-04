const HEADERS = new Headers()
HEADERS.append('Content-Type', 'application/json')

function fetchJobList(limit = 10, offset = 0) {
	const requestOptions = {
		headers: HEADERS,
		body: {
			limit,
			offset,
		},
		method: 'POST',
	}

	return new Promise((resolve, reject) => {
		fetch(
			'https://api.weekday.technology/adhoc/getSampleJdJSON',
			requestOptions
		)
			.then((r) => r.json(), reject)
			.then(resolve, reject)
			.catch(reject)
	})
}

export { fetchJobList }
