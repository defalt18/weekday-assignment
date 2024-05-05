import React, { memo, useCallback, useState } from 'react'
import Select from 'react-select'
import { isEmpty } from '../../../../utils'

function SelectFilter(props) {
	const { placeholder, onChange, options, label, name, isMulti = false } = props
	const [value, setValue] = useState(null)

	const onSelectValueChange = useCallback(
		(option) => {
			setValue(option)
			onChange((d) => ({
				...d,
				[name]: isMulti
					? option.map(({ value }) => value)
					: option?.value || '',
			}))
		},
		[isMulti, name, onChange]
	)

	return (
		<div>
			<label htmlFor={name} className='text-l block facet-label'>
				{!isEmpty(value) && label}
			</label>
			<Select
				closeMenuOnSelect
				isClearable
				isMulti={isMulti}
				value={value}
				name={name}
				options={options}
				placeholder={
					<p className='facet-text-field-typography'>{placeholder}</p>
				}
				styles={{
					input: (s) => ({ ...s, width: '10rem' }),
					control: (s) => ({ ...s, height: '3rem' }),
				}}
				onChange={onSelectValueChange}
			/>
		</div>
	)
}

export default memo(SelectFilter)
