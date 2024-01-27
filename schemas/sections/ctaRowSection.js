import CTARowsSectionIcon from '../../studio/static/ctaRowsSectionIcon'

const ctaRowSection = {
  type: 'object',
  name: 'ctaRowSection',
  title: 'CTA Rows',
  icon: CTARowsSectionIcon,
  fields: [
    {
      type: 'string',
      name: 'title', 
      title: 'Section Title',
      validation: Rule => [Rule.required().error('Title is required.'),
      Rule.max(100).warning('Text should be short enough to fit in the ribbon box')],
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

export default ctaRowSection;
