const tableColumn = {
	type: 'object',
	name: 'tableColumn',
	title: 'Table Column',
	fields: [
		{
			type: 'string',
			name: 'columnHeader',
			title: 'Column Header',
		},
		{
			type: 'array',
			name: 'columnCells',
			of: [
				{
					type: 'object',
						fields: [
							{ name: 'heading', type: 'string' },
							{
								name: 'text',
								type: 'simpleBlockContent',
								validation: Rule => Rule.max(150).error('150 characters max')
							},
							{name: 'link', type: 'link'}
						],
					},
				
			],
		},
	],
};

export default tableColumn;
