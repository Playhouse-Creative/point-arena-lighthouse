export default {
  type: 'object',
  name: 'textWithIllustration',
  title: 'Text With Illustration',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'simpleBlockContent',
      name: 'text'
    },
    {
      type: 'heroImage',
      name: 'heroImage'
    },
    {
      type: 'string',
      name: 'linkTo'
    },
    {
      title: 'Overlay Color',
      name: 'overlayColor',
      type: 'string',
      options: {
        list: [
          { title: 'Orange', value: 'rgba(139,87,9,58)' },
          { title: 'Plum', value: 'rgba(139,9,40,51)' },
          { title: 'Teal', value: 'rgba(9,124,139,43)' },
          { title: 'Yellow', value: 'rgba(139,118,9,53)' },
          { title: 'Green', value: 'rgba(62,128,11,57)' },
          { title: 'Rose', value: 'rgba(139,33,9,43)' }
        ]
      }
    }
  ]
}
