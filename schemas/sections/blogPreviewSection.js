import BlogPreviewSectionIcon from '../../studio/static/blogPreviewSectionIcon'

const blogPreviewSection = {
  type: 'object',
  name: 'blogPreviewSection',
  title: 'Blog Preview',
  icon: BlogPreviewSectionIcon,
  fields: [
    {
      type: 'string',
      name: 'title', 
      title: 'Section Title',
      validation: Rule => [Rule.required().error('Title is required.'),
      Rule.max(100).warning('Text should be less than 100 characters.')],
    },
    {
			name: 'linkId',
			type: 'reference',
      to: [{type: 'linkId'}],
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

export default blogPreviewSection;
