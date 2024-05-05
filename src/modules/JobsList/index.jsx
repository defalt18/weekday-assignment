import React, { memo } from 'react'
import JobCard from './components/JobCard'
import ListIntersectionComponent from './components/ListIntersectionComponent'

function JobsList({ jobList = [], fetchNext, isMoreResultsAvailable }) {
	return (
		<div id='list'>
			<div className='list-area'>
				{jobList.map((job, ind) => (
					<JobCard key={ind} {...job} />
				))}
			</div>
			<ListIntersectionComponent
				fetchNext={fetchNext}
				isMoreResultsAvailable={isMoreResultsAvailable}
			/>
		</div>
	)
}

export default memo(JobsList)
