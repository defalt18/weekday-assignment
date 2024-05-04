import React, { memo } from 'react'
import SearchJobs from '../../modules/Search'

// View
function SearchPage(props) {
	return (
		<>
			<SearchJobs />
		</>
	)
}

export default memo(SearchPage)
