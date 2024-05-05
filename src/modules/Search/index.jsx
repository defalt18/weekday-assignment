import React, { memo } from 'react'
import FilterFacets from '../../modules/FilterFacets'
import JobsList from '../../modules/JobsList'
import useFilteredListData from './useFilteredListData'
import { isEmpty } from '../../utils'
import NoResultsFound from './components/NoResultsFound'

function SearchJobs(props) {
	const { fetchNext, jobList, setFilterState, isMoreResultsAvailable } =
		useFilteredListData()

	return (
		<div className='page-container'>
			<FilterFacets setFilterState={setFilterState} />
			<JobsList
				jobList={jobList}
				fetchNext={fetchNext}
				isMoreResultsAvailable={isMoreResultsAvailable}
			/>
			{isEmpty(jobList) && !isMoreResultsAvailable && <NoResultsFound />}
		</div>
	)
}

export default memo(SearchJobs)
