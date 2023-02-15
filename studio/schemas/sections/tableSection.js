import TableSectionIcon from '/static/tableSectionIcon'

export default {
	type: 'object',
	name: 'tableSection',
	title: 'Table Section',
	icon: TableSectionIcon,
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
			type: 'object',
			name: 'columns',
			options: { columns: 2 },
			fields: [
				{
					type: 'tableColumn',
					name: 'columnOne',
					title: 'Column One',
				},
				{
					type: 'tableColumn',
					name: 'columnTwo',
					title: 'Column Two',
				}
			],
		},
	],
}
