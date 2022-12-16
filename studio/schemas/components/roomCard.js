export default {
	type: 'object',
	name: 'roomCard',
	title: 'Room Card',
	fields: [
		{ name: 'title', type: 'string' },
        {name: 'images', type: 'array', title: 'Photos', of:[{type: 'mainImage'}]},
		{
			name: 'subHeading',
			type: 'string',
		},
		{
			name: 'featuresList',
			title: 'List of features',
			type: 'array',
			of: [{ type: 'iconListItem' }],
		},
		{ name: 'price', title: 'Price per night', type: 'number' },
	],
}
