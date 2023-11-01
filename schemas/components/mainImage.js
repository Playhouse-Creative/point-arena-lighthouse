export default {
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
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(). max(75).warning('Shorter alt texts are usually better.'),
      
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt'
    }
  }
}
