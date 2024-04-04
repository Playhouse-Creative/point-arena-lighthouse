const mainImage = {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      validation: Rule => [Rule.required().error('Alt text is required.'),
    Rule.max(75).warning('Alt text should be less than 75 characters.')],
    },
    {
      name: 'linkUrl',
      type: 'link',
      title: 'Link',
      
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt'
    }
  }
};

export default mainImage;
