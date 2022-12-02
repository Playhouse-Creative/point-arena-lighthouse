export default {
  type: 'object',
  name: 'ctaColumnsSection',
  title: 'CTA Columns Section',
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
      name: 'columns',
      of: [{ type: 'ctaPlug' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: `CTA columns: ${title}`
      }
    }
  }
}
