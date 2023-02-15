import RoomCardsSectionIcon from '/static/roomCardsSectionIcon'

export default {
    type: 'object',
    name: 'roomCardsSection',
    title: 'Room Cards',
    icon: RoomCardsSectionIcon,
    fields: [
      {
        name: 'id',
        type: 'string',
        title: 'ID'
      },
      {
        type: 'array',
        name: 'cards',
        of: [{ type: 'roomCard' }]
      }
    ]
  }