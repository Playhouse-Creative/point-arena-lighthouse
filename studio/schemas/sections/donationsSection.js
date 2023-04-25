export default {
    type: 'object',
    name: 'donationsSection',
    title: 'Donations Section',
    fields: [
      {
        type: 'string',
        name: 'title',
        title: 'Section Title',
        validation: Rule => Rule.required().max(75).warning('Shorter titles are usually better')
      },
      {
        name: 'linkId',
        type: 'reference',
        to: [{type: 'linkId'}],
        title: 'Link ID',
        description: 'This is the ID that will be used in the URL to link to this section. It must be unique.'
      },
      
    ],
    preview: {
      select: {
        title: 'title'
      },
      prepare({ title }) {
        return {
          title: `Donations: ${title}`
        }
      }
    }
  }