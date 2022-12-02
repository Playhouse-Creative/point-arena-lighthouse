export default {
  title: 'Simple Block Content',
  name: 'simpleBlockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Italic', value: 'italic'},
          {title: 'Code', value: 'code'},
          {title: 'Underline', value: 'underline'}
        ],
        annotations: [
          {
            title: 'URL',
            type: 'link'
          }
        ]
      }
    }
  ]
}
