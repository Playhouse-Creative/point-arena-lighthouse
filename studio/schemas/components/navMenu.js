export default {
  type: 'document',
  name: 'navigationMenu',
  title: 'Navigation Menu',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      title: 'Landing page',
      name: 'landingPageRoute',
      type: 'reference',
      to: [{type: 'route'}]
    },
    {
      title: 'Kind',
      name: 'kind',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['Links', 'Dropdown Menu']
      }
    },
    {
      type: 'array',
      name: 'items',
      title: 'Items',
      of: [{type: 'menuLink'}]
    }
  ]
}
