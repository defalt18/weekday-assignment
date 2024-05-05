import React, { memo } from 'react'
import noResultsFound from '../../../../assets/images/nothing-found-vector.png'

const IMAGE_STYLES = { width: '10rem', objectFit: 'contain' }

function NoResultsFound() {
	return (
		<div className='flex-col items-center gap-8'>
			<img
				alt='no-results-found-logo'
				src={noResultsFound}
				style={IMAGE_STYLES}
			/>
			<p className='text-xl font-bold'>
				No Jobs available for this category at the moment
			</p>
		</div>
	)
}

export default memo(NoResultsFound)
