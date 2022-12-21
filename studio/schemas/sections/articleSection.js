export default {
	type: 'object',
	name: 'articleSection',
	title: 'Article Section',
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
			name: 'articleType',
			type: 'object',
			title: 'Article Type',
			fieldsets: [
				{
					name: 'switch',
					title: 'Toggle Article Type',
					options: { columns: 2 },
				},
			],
			fields: [
				{
					name: 'sideGallerySwitch',
					type: 'boolean',
					title: 'Side Gallery Article',
					fieldset: 'switch',
					hidden: ({ parent }) => parent?.carouselSwitch,
				},
				{
					name: 'carouselSwitch',
					type: 'boolean',
					title: 'Carousel Article',
					fieldset: 'switch',
					hidden: ({ parent }) => parent?.sideGallerySwitch,
				},
				{
					name: 'sideGalleryArticle',
					title: 'Side Gallery Article',
					type: 'object',
					fields: [
						{ type: 'string', name: 'title' },
						{ type: 'bodyPortableText', name: 'body' },
						{
							type: 'array',
							name: 'images',
							of: [{ type: 'mainImage' }],
						},
					],
					hidden: ({ parent }) => !parent?.sideGallerySwitch,
				},
				{
					name: 'carouselArticle',
					title: 'Carousel Article',
					type: 'object',
					fields: [
						{ type: 'string', name: 'title' },
						{ type: 'bodyPortableText', name: 'body' },
						{
							type: 'array',
							name: 'images',
							of: [{ type: 'mainImage' }],
						},
					],
					hidden: ({ parent }) => !parent?.carouselSwitch,
				},
			],
		},
	],
}
