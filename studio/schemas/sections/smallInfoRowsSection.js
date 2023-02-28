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
			type: 'reference',
      to: [{type: 'id'}],
			title: 'Link ID',
			description: 'This is the ID that will be used in the URL to link to this section. It must be unique.'
		},
    {
      type: 'array',
      name: 'rows',
      of: [{ type: 'textWithIllustration' }]
    }
  ]
}
