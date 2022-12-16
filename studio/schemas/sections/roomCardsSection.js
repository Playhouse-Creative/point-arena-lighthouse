export default {
    type: 'object',
    name: 'roomCardsSection',
    title: 'Room Cards Section',
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