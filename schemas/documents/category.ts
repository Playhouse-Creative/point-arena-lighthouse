import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      description: 'Choose a color for for the category banner color.',
      type: 'colorlist',

      options: {
        list: [
          { title: 'Red', value: '#A73D1C' },
          { title: 'Teal', value: '#0088A7' },
          { title: 'Navy', value: '#002C49' },
          { title: 'Green', value: '#49763E' },
          { title: 'Blue', value: '#054F73' },
        ]
      },
    },),
  ],
  preview: {
    select: {
      title: 'title',

    }
  }
})
