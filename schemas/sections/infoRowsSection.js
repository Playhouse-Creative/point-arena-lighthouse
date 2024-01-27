import InfoRowsSectionIcon from '../../studio/static/infoRowsSectionIcon'

const infoRowsSection = {
	type: 'object',
	name: 'infoRowsSection',
	title: 'Info Rows',
	icon: InfoRowsSectionIcon,
	fields: [
		{
			type: 'string',
			name: 'title',
			title: 'Section Title',
			validation: Rule => [Rule.required().error('Heading text is required.'),
			Rule.max(75).warning('Text should be less than 75 characters.')],
		},
		{
			name: 'linkId',
			type: 'reference',
            to: [{type: 'linkId'}],
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
							validation: (Rule) => Rule.required().max(40),
						},
						{
							type: 'simpleBlockContent',
							name: 'text',
							validation: (Rule) => Rule.required().max(200),
						},
					],
				},
			],
		},
		{ name: 'finePrint', type: 'simpleBlockContent', title: 'Fine Print'}
	],
}

export default infoRowsSection;
