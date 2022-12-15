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
        type: 'string',
        title: 'ID'
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