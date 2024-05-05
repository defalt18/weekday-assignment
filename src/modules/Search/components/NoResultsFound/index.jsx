import React, { memo } from 'react'
import noResultsFound from '../../../../assets/images/nothing-found-vector.png'

function NoResultsFound() {
	return (
		<div className='flex-col items-center'>
			<img
				src={noResultsFound}
				style={{ height: '30rem', width: '30rem', objectFit: 'contain' }}
			/>
		</div>
	)
}

export default memo(NoResultsFound)
