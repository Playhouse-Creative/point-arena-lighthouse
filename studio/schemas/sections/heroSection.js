export default {
	type: 'object',
	name: 'heroSection',
	title: 'Hero Section',
	fields: [
		{
			name: 'label',
			type: 'string',
		},
		{
			name: 'heading',
			type: 'string',
			title: 'Heading',
		},
		{ name: 'subheading', type: 'string', title: 'Subheading' },
		{
			name: 'heroImage',
			type: 'heroImage',
		},
		{
			name: 'cta',
			type: 'cta',
		},
	],
	preview: {
		select: {
			title: 'heading',
			subtitle: 'label',
			disabled: 'disabled',
		},
		prepare({ title, disabled }) {
			return {
				title: `Hero: ${disabled ? 'DISABLED' : title}`,
			}
		},
	},
}
