export default {
  type: 'object',
  name: 'infoRowsSection',
  title: 'Info Rows Section',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      name: 'id',
      type: 'string',
      title: 'ID'
    },
    {
      type: 'array',
      name: 'rows',
      of: [{ type: 'textWithIllustration' }]
    }
  ]
}
