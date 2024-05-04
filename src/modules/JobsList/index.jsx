import React, { memo } from 'react'
import JobCard from './components/JobCard'

function JobsList(props) {
	return (
		<div>
			<h3>List goes here</h3>
			<div className='list-area'>
				{Array(12)
					.fill('')
					.map((c, ind) => (
						<JobCard key={ind} />
					))}
			</div>
		</div>
	)
}

export default memo(JobsList)
