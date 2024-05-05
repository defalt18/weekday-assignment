import { fetchJobList } from '../../services/queries'
import { compose, isEmpty, isNaN } from '../../utils'

export function filterDataBasedOnState(filterState, data) {
	let displayData = data

	if (isEmpty(filterState)) return { data, filteredData: displayData }

	// for (let attr of Object.keys(filterState)) {
	// 	if (isEmpty(filterState[attr])) {
	// 		continue
	// 	} else {
	// 		if (isNaN(filterState[attr])) {
	//
	// 		} else {
	// 		}
	// 	}
	// }

	displayData = displayData.filter((it) =>
		it.companyName.includes(filterState.companyName)
	)

	return { data, filteredData: displayData }
}

const middlewareFn = (postFetch, data) => {
	postFetch(data.totalCount)
	return data.jdList
}

export const getMoreJobs = (
	limit,
	offset,
	filterState,
	postFetch,
	postFilter
) =>
	compose(
		fetchJobList.bind(this, limit, offset),
		middlewareFn.bind(this, postFetch),
		filterDataBasedOnState.bind(this, filterState),
		postFilter
	)()
