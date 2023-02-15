import CTARowsSectionIcon from '/static/ctaRowsSectionIcon'

export default {
  type: 'object',
  name: 'ctaRowSection',
  title: 'CTA Rows',
  icon: CTARowsSectionIcon,
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
      of: [{ type: 'ctaPlug' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: `CTA rows: ${title}`
      }
    }
  }
}
