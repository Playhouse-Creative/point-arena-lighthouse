import CTARowsSectionIcon from '/static/ctaRowsSectionIcon'

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
      validation: Rule => Rule.required().max(100).warning('Shorter titles are usually better')
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
