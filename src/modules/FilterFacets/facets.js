export const FACETS = [
	{
		type: 'select',
		name: 'jobRole',
		isMulti: true,
		placeholder: 'Roles',
		options: [
			{
				label: 'ENGINEERING',
				options: [
					{ label: 'React Native', value: 'React Native' },
					{ label: 'React', value: 'React' },
				],
			},
		],
		label: 'Roles',
	},
	{
		type: 'select',
		name: 'minExp',
		placeholder: 'Experience',
		options: Array(11)
			.fill('')
			.map((_, i) => ({ label: i.toString(), value: i })),
		label: 'Experience',
	},
	{
		type: 'select',
		name: 'minJdSalary',
		placeholder: 'Minimum Base Pay Salary',
		options: Array(8)
			.fill(10, 0, 70)
			.map((_, i) => ({ label: (i * 10).toString() + 'L', value: i * 10 })),
		label: 'Min Base Pay',
	},
	{
		type: 'input',
		name: 'companyName',
		placeholder: 'Search Company Name',
		label: 'Company Name',
	},
]
