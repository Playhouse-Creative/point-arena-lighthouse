export default {
	type: 'object',
	name: 'ctaPlug',
	title: 'Call to action',
	fields: [
		
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			description:'This is the title that will be displayed in the ribbon. It should be short and to the point',
			validation: Rule => Rule.required().max(25) 
		},
		{ name: 'image', type: 'mainImage', title: 'Image' },
		{ name:'bodyHeader', type: 'string', title: 'Body Header'},
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
