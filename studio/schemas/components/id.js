import {SlugInput} from 'sanity-plugin-prefixed-slug'

export default {
  name: 'id',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Link ID',
      type: 'slug',
      components: {
        input: SlugInput,
      },
      options: {
        source: 'title',
        urlPrefix: 'https://www.pointarenalighthouse.com/(page)#',
        maxLength: 30,
        storeFullUrl: true,
        description:
          'This is the ID that will be used in the URL to link to this section. It must be unique.',
      },
    },
  ],
  preview: {
    select: {
      title: 'id.current',
    },
    prepare({title}) {
      return {
        title: `ID: #${title}`,
      }
    },
  },
}
