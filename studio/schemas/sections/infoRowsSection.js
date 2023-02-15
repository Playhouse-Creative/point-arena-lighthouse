import  InfoRowsSectionIcon  from '/static/infoRowsSectionIcon'

export default {
	type: 'object',
	name: 'infoRowsSection',
	title: 'Info Rows',
	icon: InfoRowsSectionIcon,
	fields: [
		{
			type: 'string',
			name: 'title',
		},
		{
			name: 'id',
			type: 'string',
			title: 'ID',
		},
		{
			type: 'array',
			name: 'rows',
			of: [
				{
					type: 'object',
					fields: [
						{
							type: 'string',
							name: 'title',
						},
						{
							type: 'simpleBlockContent',
							name: 'text',
						},
					],
				},
			],
		},
	],
}
