import React, { memo } from 'react'
import { Avatar, Card, CardActions, CardContent, Chip } from '@mui/material'
import { Button } from '@mui/base/Button'
import './JobCard.css'
import { CardContext } from './context'
import useCardContext from './useCardContext'
import { isNaN, toSentenceCase } from '../../../../utils'

const JobCardHeader = memo(function () {
	const {
		logoUrl,
		companyName,
		jobRole,
		location,
		maxJdSalary,
		minJdSalary,
		salaryCurrencyCode,
	} = useCardContext()

	return (
		<div className='card-header'>
			<Chip
				label='⌛️ Posted 10 days ago'
				clickable={false}
				variant='outlined'
				className='card-chip'
				size='small'
			/>
			<div className='flex gap-8'>
				<Avatar src={logoUrl} variant='square' />
				<div className='flex-col'>
					<span className='card-company-name text-base color-weekday-gray'>
						{companyName}
					</span>
					<p className='text-l'>{toSentenceCase(jobRole)}</p>
					<p className='card-location-name text-small'>
						{toSentenceCase(location)}
					</p>
				</div>
			</div>
			{!isNaN(maxJdSalary) && !isNaN(minJdSalary) && (
				<p className='text-l color-weekday-gray'>
					Estimated Salary : ${minJdSalary}k - {maxJdSalary}k{' '}
					{salaryCurrencyCode} ✅
				</p>
			)}
		</div>
	)
})

const JobCardDescription = memo(() => {
	const { jobDetailsFromCompany, minExp } = useCardContext()
	return (
		<div className='card-description'>
			<h3>About Company</h3>
			<p className='text-l card-description-text'>{jobDetailsFromCompany}</p>
			{!isNaN(minExp) && (
				<>
					<p className='color-weekday-gray text-base font-bold'>
						Minimum Experience
					</p>
					<p>{minExp} years</p>
				</>
			)}
		</div>
	)
})

const JobCardFooter = memo(() => {
	return (
		<Button className='card-action' variant='contained'>
			⚡️ Easy Apply
		</Button>
	)
})

function JobCard(props) {
	return (
		<CardContext.Provider value={props}>
			<div className='card'>
				<Card>
					<CardContent>
						<JobCardHeader />
						<JobCardDescription />
					</CardContent>
					<CardActions className='card-action-area'>
						<JobCardFooter />
					</CardActions>
				</Card>
			</div>
		</CardContext.Provider>
	)
}

export default memo(JobCard)
