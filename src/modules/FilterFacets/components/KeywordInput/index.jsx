import React, { useCallback, useMemo, useState } from 'react'
import { isEmpty, debounce } from '../../../../utils'

function KeywordInput({ onChange, name, placeholder, label }) {
	const [keyword, setKeyword] = useState('')

	const updateFilterState = useMemo(() => debounce(onChange, 1000), [onChange])

	const onInputChange = useCallback(
		(event) => {
			const valueForInput = event.target.value
			setKeyword(valueForInput)
			updateFilterState((d) => ({ ...d, companyName: valueForInput }))
		},
		[updateFilterState]
	)

	return (
		<div>
			<label htmlFor='keyword' className='text-l block facet-label'>
				{!isEmpty(keyword) && label}
			</label>
			<input
				className='facet-text-field facet-text-field-typography'
				name={name}
				placeholder={placeholder}
				value={keyword}
				id={name}
				onChange={onInputChange}
			/>
		</div>
	)
}

export default KeywordInput
