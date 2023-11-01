import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  type: 'document',
  title: 'Author',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  liveEdit: true,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name'
    }),
    defineField({
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },),
    defineField({
      name: 'bio',
      type: 'simpleBlockContent',
      title: 'Biography'
    },),
    
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
})
