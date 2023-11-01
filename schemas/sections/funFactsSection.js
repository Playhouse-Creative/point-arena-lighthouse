import FunFactsSectionIcon from '../../studio/static/funFactsSectionIcon'

export default {
	type: 'object',
	name: 'funFactsSection',
	title: 'Fun Facts',
	icon: FunFactsSectionIcon,
	fields: [
		{
			type: 'string',
			name: 'title',
			title: 'Section Title',
			validation: (Rule) => Rule.required().max(100).warning('Shorter titles are usually better'),
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
