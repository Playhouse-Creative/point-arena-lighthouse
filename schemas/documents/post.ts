import { DocumentIcon } from '@sanity/icons'
import {  defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  icon: DocumentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug is required to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to determine the order posts appear on the site',
    }),
    defineField({
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      rows: 4,
      description:
        'This ends up on summary pages, on Google, and when people share your post in social media. Maximum 250 characters.',
      validation: Rule => Rule.required().max(250).error('Please keep character count under 250'),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author'
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          name: 'category',
          type: 'reference',
          to: [
            {
              type: 'category'
            }
          ],

        }
      ]
    }),
    defineField({
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
    }),

  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      const path = `/post/${slug.current}`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date',

      }
    },
  },
})
