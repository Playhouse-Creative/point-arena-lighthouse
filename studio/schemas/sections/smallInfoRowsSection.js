export default {
  type: 'object',
  name: 'smallInfoRowsSection',
  title: 'Small Info Rows Section',
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
