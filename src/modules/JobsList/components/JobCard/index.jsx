import React, { memo } from 'react'
import { Avatar, Card, CardActions, CardContent, Chip } from '@mui/material'
import { Button } from '@mui/base/Button'
import './JobCard.css'
import { CardContext } from './context'
import useCardContext from './useCardContext'
import { isEmpty } from '../../../../utils'

const JobCardHeader = memo(function () {
	const { logoUrl, companyName, jobRole, location, maxJdSalary, minJdSalary } =
		useCardContext()

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
					<p className='card-company-name text-base color-weekday-gray'>
						{companyName}
					</p>
					<p className='text-l'>{jobRole}</p>
					<p className='card-location-name text-small'>{location}</p>
				</div>
			</div>
			{isEmpty(maxJdSalary) && isEmpty(minJdSalary) && (
				<p className='text-l color-weekday-gray'>
					Estimated Salary : ₹25 - 30 LPA ✅
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
			<span className='text-l'>{jobDetailsFromCompany}</span>
			{isEmpty(minExp) && (
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
			<Card className='card'>
				<CardContent>
					<JobCardHeader />
					<JobCardDescription />
				</CardContent>
				<CardActions>
					<JobCardFooter />
				</CardActions>
			</Card>
		</CardContext.Provider>
	)
}

export default memo(JobCard)
