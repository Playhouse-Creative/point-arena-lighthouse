export default {
	name: 'reviewListItem',
	type: 'object',
	title: 'Review List Item',
	fields: [
		{ name: 'title', type: 'string' },
		{
			name: 'stars',
			type: 'number',
            title: 'Stars(0-5)',
			validation: (Rule) =>
				Rule.required()
					.min(0)
					.max(5)
					.error('Must choose a number from 0-5'),
		},
		{ name: 'body', type: 'simpleBlockContent' },
	],
}
