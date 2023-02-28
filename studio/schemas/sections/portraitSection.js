import PortraitSectionIcon from '/static/portraitSectionIcon'

export default {
  name: 'portraitSection',
  title: 'Portrait Section',
  type: 'object',
  icon: PortraitSectionIcon,
  fields: [
    {name: 'heading', title: 'Section Heading', type: 'string'},
    {
        name: 'id',
        type: 'reference',
      to: [{type: 'id'}],
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
