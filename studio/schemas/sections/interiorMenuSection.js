export default {
  type: 'object',
  name: 'interiorMenuSection',
  title: 'Interior Menu Section',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'array',
      name: 'rows',
      of: [{ type: 'textWithIllustration' }]
    }
  ]
}
