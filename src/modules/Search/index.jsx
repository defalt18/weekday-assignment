import React, { memo } from 'react'
import FilterFacets from '../../modules/FilterFacets'
import JobsList from '../../modules/JobsList'

function SearchJobs(props) {
	// const [filterState, setFilterState] = React.useState({})
	// const [jobList, setJobList] = React.useState()

	return (
		<div className='page-container'>
			<FilterFacets />
			<JobsList />
		</div>
	)
}

export default memo(SearchJobs)
