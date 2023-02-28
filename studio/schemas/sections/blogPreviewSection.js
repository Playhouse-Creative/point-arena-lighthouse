import BlogPreviewSectionIcon from '/static/blogPreviewSectionIcon'

export default {
  type: 'object',
  name: 'blogPreviewSection',
  title: 'Blog Preview',
  icon: BlogPreviewSectionIcon,
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
      title: 'Category',
      name: 'categories',
      type: 'reference',
      to: [
        {
          type: 'category',
          
        }
      ]
    }
  ]
}
