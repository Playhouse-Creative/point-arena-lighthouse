import CTARowsSectionIcon from '../../../studio/static/ctaRowsSectionIcon'

export default {
  type: 'object',
  name: 'ctaRowSection',
  title: 'CTA Rows',
  icon: CTARowsSectionIcon,
  fields: [
    {
      type: 'string',
      name: 'title', 
      title: 'Section Title',
      validation: Rule => Rule.required().max(100).error('The title must be short enough to fit in the ribbon.')
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
