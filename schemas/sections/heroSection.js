import HeroSectionIcon from '../../studio/static/heroSectionIcon'

const heroSection = {
	type: 'object',
	name: 'heroSection',
	title: 'Hero',
	icon: HeroSectionIcon,
	fields: [
		{
			name: 'heading',
			type: 'string',
			title: 'Heading',
			validation: Rule => [Rule.required().error('Heading text is required.'),
			Rule.max(75).warning('Text should be less than 75 characters.')],
		},
		{ name: 'subheading', type: 'string', title: 'Subheading', validation: Rule => Rule.max(150) },
		{
			name: 'heroImage',
			type: 'heroImage',
		},
		{
			name: 'cta',
			type: 'array',
			of: [	{ type: 'cta' } ]
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

export default heroSection;
