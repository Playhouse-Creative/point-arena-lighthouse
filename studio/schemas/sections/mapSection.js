export default {
  type: 'object',
  name: 'mapSection',
  title: 'Map Section',
  description: 'A section that shows a map and list of locations',
  fields: [
    {
      title: 'Title',
      type: 'string',
      name: 'title'
    },
    {
      name: 'id',
      type: 'string',
      title: 'ID'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      type: 'array',
      name: 'items',
      of: [{ type: 'mapListItems' }]
    },
    {
      title: 'Map',
      type: 'mainImage',
      name: 'map'
    }
  ],
  preview: {
    select: {
      title: 'title',
      landingPage: 'landingPageRoute.slug.current',
      route: 'route',
      link: 'link'
    },
    prepare({ title }) {
      return {
        title
      }
    }
  }
}
