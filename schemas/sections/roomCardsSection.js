import RoomCardsSectionIcon from '../../studio/static/roomCardsSectionIcon'

export default {
    type: 'object',
    name: 'roomCardsSection',
    title: 'Room Cards',
    icon: RoomCardsSectionIcon,
    fields: [
      {name: 'title', type: 'string', title: 'Section Title', validation: Rule => Rule.required().max(75).error('The title must be short enough to fit in the ribbon.')},
      {
        name: 'linkId',
        type: 'reference',
        to: [{type: 'linkId'}],
        title: 'Link ID',
        description: 'This is the ID that will be used in the URL to link to this section. It must be unique.'
      },
      {
        type: 'array',
        name: 'cards',
        of: [{ type: 'roomCard' }]
      }
    ]
  }