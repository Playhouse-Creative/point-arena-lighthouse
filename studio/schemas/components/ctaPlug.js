export default {
	type: 'object',
	name: 'ctaPlug',
	title: 'Call to action',
	fields: [
		{
			name: 'label',
			type: 'string',
		},
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'id',
			type: 'string',
			title: 'ID',
		},
		{ name: 'image', type: 'mainImage', title: 'Image' },
		{
			name: 'body',
			type: 'simpleBlockContent',
			title: 'Body',
		},
		{
			name: 'cta',
			type: 'cta',
			title: 'Link'}
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'label',
		},
		prepare({ title, subtitle }) {
			return {
				title: `Call to action: ${title || 'Title not set'}`,
				subtitle,
			}
		},
	},
}
