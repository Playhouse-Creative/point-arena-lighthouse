export default {
	type: 'object',
	name: 'listSection',
	title: 'List Section',

	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},

		{
			name: 'listType',
			type: 'object',
			title: 'List Type',
			fieldsets: [
				{
					name: 'switch',
					title: 'Toggle List Type',
					options: { columns: 3 },
				},
			],
			fields: [
				{
					name: 'gridListSwitch',
					type: 'boolean',
					title: 'List Grid',
					fieldset: 'switch',
					hidden: ({ parent }) =>
						parent?.infoListSwitch || parent?.reviewListSwitch,
				},
				{
					name: 'infoListSwitch',
					type: 'boolean',
					title: 'Info List',
					fieldset: 'switch',
					hidden: ({ parent }) =>
						parent?.gridListSwitch || parent?.reviewListSwitch,
				},
				{
					name: 'reviewListSwitch',
					type: 'boolean',
					title: 'Review List',
					fieldset: 'switch',
					hidden: ({ parent }) =>
						parent?.infoListSwitch || parent?.gridListSwitch,
				},
				{
					name: 'gridList',
					title: 'Grid List',
					type: 'array',
					of: [{ type: 'gridListItem' }],
					hidden: ({ parent }) => !parent?.gridListSwitch,
				},

				{
					name: 'infoList',
					title: 'Info List',
					type: 'array',
					of: [
						{
							type: 'infoListItem',
						},
					],
					hidden: ({ parent }) => !parent?.infoListSwitch,
				},

				{
					name: 'reviewList',
					title: 'Review List',
					type: 'array',
					of: [
						{
							type: 'reviewListItem',
						},
					],
					hidden: ({ parent }) => !parent?.reviewListSwitch,
				},
			],
		},
	],
}
