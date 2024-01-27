import FunFactsSectionIcon from '../../studio/static/funFactsSectionIcon'

const funFactsSection = {
	type: 'object',
	name: 'funFactsSection',
	title: 'Fun Facts',
	icon: FunFactsSectionIcon,
	fields: [
		{
			type: 'string',
			name: 'title',
			title: 'Section Title',
			validation: Rule => [Rule.required().error('Title is required.'),
			Rule.max(100).warning('Text should be less than 100 characters.')],
		},
		{
			name: 'linkId',
			type: 'reference',
			to: [{ type: 'linkId' }],
			title: 'Link ID',
			description: 'This is the ID that will be used in the URL to link to this section. It must be unique.'
		},
		{
			type: 'array',
			name: 'listItems',
			title: 'List Items',
			of: [{ type: 'string' }],
		},
		{
			type: 'array',
			name: 'images',
			title: 'Images(4)',
			of: [{ type: 'mainImage' }],
			validation: (Rule) =>
				Rule.required()
					.min(4)
					.max(4)
					.error('Exactly 4 images are required for this section type.'),
		},
	],
}

export default funFactsSection;
