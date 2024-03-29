const simpleBlockContent = {
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
};

export default simpleBlockContent;
