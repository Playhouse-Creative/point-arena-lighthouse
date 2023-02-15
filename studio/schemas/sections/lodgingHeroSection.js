import LodgingHeroSectionIcon from '/static/lodgingHeroSectionIcon'

export default {
    type: 'object',
    name: 'lodgingHeroSection',
    title: 'Lodging Hero',
    icon: LodgingHeroSectionIcon,
    fields: [
      {
        name: 'label',
        type: 'string'
      },
      {
        name: 'heading',
        type: 'string',
        title: 'Heading'
      },
      {
        name: 'heroImage',
        type: 'mainImage'
      },
      {
        type: 'array',
        name: 'gridImages',
        title: 'Grid Images(4)',
        of: [{ type: 'mainImage' }],
        validation: (Rule) =>
            Rule.required()
                .min(4)
                .max(4)
                .error('4 images are required for this section type.'),
    },
    ],
    preview: {
      select: {
        title: 'heading',
        subtitle: 'label',
        disabled: 'disabled'
      },
      prepare({ title, disabled }) {
        return {
          title: `Hero: ${disabled ? 'DISABLED' : title}`
        }
      }
    }
  }
  