import React, { memo } from 'react'

function JobCard(props) {
	const { companyName = 'Dropbox' } = props
	return <div className='card-area'>Job Card</div>
}

export default memo(JobCard)
