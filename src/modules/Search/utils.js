import { fetchJobList } from '../../services/queries'
import { compose, isEmpty, isNaN } from '../../utils'

export function filterDataBasedOnState(filterState, data) {
	let displayData = data

	displayData = displayData.filter((jobItem) => {
		let isNeeded = true

		for (let attr of Object.keys(filterState)) {
			const attrValue = filterState[attr]

			if (!isEmpty(attrValue)) {
				if (isNaN(attrValue)) {
					if (Array.isArray(attrValue)) {
						isNeeded = isNeeded && attrValue.includes(jobItem[attr])
					} else {
						isNeeded =
							isNeeded && jobItem.companyName.includes(filterState.companyName)
					}
				} else {
					if (attr === 'minExp')
						isNeeded =
							isNeeded &&
							!isNaN(jobItem[attr]) &&
							jobItem[attr] <= attrValue &&
							(isNaN(jobItem.maxExp) || attrValue <= jobItem.maxExp)
					else if (attr === 'minJdSalary')
						isNeeded =
							isNeeded && !isNaN(jobItem[attr]) && jobItem[attr] >= attrValue
				}
			}
		}

		return isNeeded
	})

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
