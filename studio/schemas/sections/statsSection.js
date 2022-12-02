export default {
  type: 'object',
  name: 'statsSection',
  title: 'Stats Section',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'array',
      name: 'rows',
      of: [{ type: 'statsWithIcon' }]
    }
  ]
}