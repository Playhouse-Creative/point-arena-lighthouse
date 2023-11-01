import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'linkId',
  title: 'Link ID',
  type: 'document',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'slug',
      title: 'Link ID',
      type: 'slug',
      urlPrefix: 'https://www.pointarenalighthouse.com/(page)#',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
        maxLength: 200,
      },
    },),   
  ],
  preview: {
    select: {
      title: 'slug.current',
    },
    prepare({ title }) {
      return {
        title: `${title}`,
      }
    },
  },
})
