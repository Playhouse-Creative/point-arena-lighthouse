import RoomCardsSectionIcon from '/static/roomCardsSectionIcon'

export default {
    type: 'object',
    name: 'roomCardsSection',
    title: 'Room Cards',
    icon: RoomCardsSectionIcon,
    fields: [
      {name: 'title', type: 'string', title: 'Title'},
      {
        name: 'id',
        type: 'reference',
        to: [{type: 'id'}],
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