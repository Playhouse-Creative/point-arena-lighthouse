

export default {
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
      description: 'Only the first value of these will be used'
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string', 
      description: 'This will appear on the button. Keep it short and acitve. Example: Book a room!',
      validation: Rule => Rule.required().max(20).warning('Keep it under 20 characters')
    },
    {
      title: 'Path',
      name: 'route',
      fieldset: 'link',
      description: 'Example: /blog',
      type: 'string'
    },
    {
      name: 'anchorLink',
      title: 'Anchor Link',
      fieldset: 'link',
      type: 'reference',
      to: [{type: 'linkId'}]
    },
    {
      title: 'External link',
      name: 'link',
      type: 'string',
      description: 'Example: https://www.sanity.io',
      fieldset: 'link'
    }
  ],
  preview: {
    select: {
      title: 'title',
      anchorLink: 'anchorLink.linkId.current',
      route: 'route',
      link: 'link'
    },
    prepare ({title, anchorLink, route, link}) {
      let subtitle = 'Not set'
      if (anchorLink) {
        subtitle = `Route: /${anchorLink}`
      }
      if (route) {
        subtitle = `Route: ${route}`
      }
      if (link) {
        subtitle = `External: ${link}`
      }
      return {
        title,
        subtitle
      }
    }
  }
}
