import PortraitSectionIcon from '/static/portraitSectionIcon'

export default {
  name: 'portraitSection',
  title: 'Portrait Section',
  type: 'object',
  icon: PortraitSectionIcon,
  fields: [
    {name: 'heading', title: 'Section Heading', type: 'string', validation: Rule => Rule.required().max(75).warning('Shorter titles are usually better')},
    {
        name: 'linkId',
        type: 'reference',
      to: [{type: 'linkId'}],
        title: 'Link ID',
        description: 'This is the ID that will be used in the URL to link to this section. It must be unique.'
    },
    {
      name: 'portraitImage',
      title: 'Photo',
      type: 'array',
      of: [{type: 'portraitImage'}],
    },
  ],
}
