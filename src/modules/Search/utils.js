import { fetchJobList } from '../../services/queries'
import { compose, isEmpty } from '../../utils'

function filterDataBasedOnState(filterState, data) {
	if (isEmpty(filterState)) return data
}

export const getMoreJobs = (limit, offset, filterState, cb) =>
	compose(
		fetchJobList.bind(this, limit, offset),
		filterDataBasedOnState.bind(this, filterState),
		cb
	)()
