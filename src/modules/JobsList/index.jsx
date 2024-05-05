import React, { memo } from 'react'
import JobCard from './components/JobCard'
import ListIntersectionComponent from './components/ListIntersectionComponent'

function JobsList({ jobList = [], fetchNext }) {
	return (
		<div id='list'>
			<div className='list-area'>
				{jobList.map((job, ind) => (
					<JobCard key={ind} {...job} />
				))}
			</div>
			<ListIntersectionComponent fetchNext={fetchNext} />
		</div>
	)
}

export default memo(JobsList)
