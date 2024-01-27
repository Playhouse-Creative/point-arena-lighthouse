import PortraitSectionIcon from '../../studio/static/portraitSectionIcon'

const portraitSection = {
  name: 'portraitSection',
  title: 'Portrait Section',
  type: 'object',
  icon: PortraitSectionIcon,
  fields: [
    {
      name: 'heading', title: 'Section Heading', type: 'string', validation: Rule => [Rule.required().error('Heading text is required.'),
      Rule.max(75).warning('Text should be less than 75 characters.')]},
    {
      name: 'linkId',
      type: 'reference',
      to: [{ type: 'linkId' }],
      title: 'Link ID',
      description: 'This is the ID that will be used in the URL to link to this section. It must be unique.'
    },
    {
      name: 'portraitImage',
      title: 'Photo',
      type: 'array',
      of: [{ type: 'portraitImage' }],
    },
  ],
}

export default portraitSection;
