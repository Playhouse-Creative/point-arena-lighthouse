export default {
	type: 'object',
	name: 'funFactsSection',
	title: 'Fun Facts Section',
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
					.error('4 images are required for this section type.'),
		},
	],
}
