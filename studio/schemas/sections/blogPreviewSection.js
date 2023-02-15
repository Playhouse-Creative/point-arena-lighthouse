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
      type: 'string',
      title: 'ID'
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
