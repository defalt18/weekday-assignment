import React, { memo } from 'react'
import FilterFacets from '../../modules/FilterFacets'
import JobsList from '../../modules/JobsList'
import useFilteredListData from './useFilteredListData'

function SearchJobs(props) {
	const { fetchNext, jobList, setFilterState } = useFilteredListData()

	return (
		<div className='page-container'>
			<FilterFacets setFilterState={setFilterState} />
			<JobsList jobList={jobList} fetchNext={fetchNext} />
		</div>
	)
}

export default memo(SearchJobs)
