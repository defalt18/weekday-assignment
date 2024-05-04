async function fetchJobList(limit = 10, offset = 0) {
	const requestOptions = {
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify({
			limit,
			offset,
		}),
		method: 'POST',
	}
	return new Promise((resolve, reject) => {
		fetch(
			'https://api.weekday.technology/adhoc/getSampleJdJSON',
			requestOptions
		)
			.then((r) => r.json(), reject)
			.then(resolve, reject)
			.catch(console.error)
	})
}

export { fetchJobList }
