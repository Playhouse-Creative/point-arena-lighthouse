import { SlugInput } from 'sanity-plugin-prefixed-slug';

export default {
  name: 'linkId',
  title: 'Link ID',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Link ID',
      type: 'slug',
      components:{input: SlugInput},
      urlPrefix: 'https://www.pointarenalighthouse.com/(page)#',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
        maxLength: 200,
      },
    },
  ],
  preview: {
    select: {
      title: 'slug.current',
    },
    prepare({title}) {
      return {
        title: `${title}`,
      }
    },
  },
}
