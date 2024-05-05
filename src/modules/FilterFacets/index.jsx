import React, { memo } from 'react'
import KeywordInput from './components/KeywordInput'
import './FilterFacets.css'
import SelectFilter from './components/Select'
import { FACETS } from './facets'

function FilterFacets(props) {
	return (
		<div className='facets-area'>
			{FACETS.map((facet, i) => {
				if (facet.type === 'input')
					return (
						<KeywordInput
							{...facet}
							key={facet.name}
							onChange={props.setFilterState}
						/>
					)
				return (
					<SelectFilter
						{...facet}
						key={facet.name}
						onChange={props.setFilterState}
					/>
				)
			})}
		</div>
	)
}

export default memo(FilterFacets)
