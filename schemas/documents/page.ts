import { DocumentIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Page Builder',
  readOnly: false,
  icon: DocumentIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'id',
      title: 'ID',
      hidden: true,
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      hidden: true,
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      description: 'Add, edit, and reorder sections',
      title: 'Page Sections',
      type: 'array',
      of: [
          { type: 'articlesSection' },
          { type: 'bannerSection' },
          { type: 'heroSection' },
          { type: 'infoRowsSection' },
          { type: 'listSection' },
          { type: 'tableSection' },
          { type: 'portraitSection' },
          { type: 'ctaRowSection' },
          { type: 'funFactsSection' },
          { type: 'blogPreviewSection' },
          { type: 'lodgingHeroSection' },
          { type: 'roomCardsSection' },
          { type: 'donationsSection' }
      ],
      
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Page',
        title,
      }
    },
  },
})
