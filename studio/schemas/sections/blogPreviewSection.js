export default {
  type: 'object',
  name: 'blogPreviewSection',
  title: 'Blog Preview Section',
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
