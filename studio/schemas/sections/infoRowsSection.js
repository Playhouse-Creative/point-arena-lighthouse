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
			type: 'reference',
      to: [{type: 'id'}],
			title: 'Link ID',
			description: 'This is the ID that will be used in the URL to link to this section. It must be unique.'
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
