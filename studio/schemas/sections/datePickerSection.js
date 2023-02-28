export default {
    type: 'object',
    name: 'datePickerSection',
    title: 'Date Picker Section',
    fields: [
      {
        type: 'string',
        name: 'title'
      },
      {
        name: 'id',
        type: 'reference',
      to: [{type: 'id'}],
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
          title: `Date Picker: ${title}`
        }
      }
    }
  }