import ColumnArticleSectionIcon from '../../studio/static/columnArticleSectionIcon';

const articlesSection = {
  type: 'object',
  name: 'articlesSection',
  title: 'Article',
  icon: ColumnArticleSectionIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Section Title',
      validation: (Rule) => [
        Rule.required().error('Title is required.'),
        Rule.max(75).warning('Shorter than 75 characters is better.'),
      ],
    },
    {
      name: 'linkId',
      type: 'reference',
      to: [{ type: 'linkId' }],
      title: 'Link ID',
      description:
        'This is the ID that will be used in the URL to link to this section. It must be unique.',
    },
    {
      name: 'articleType',
      type: 'string',
      title: 'Article Type',
      initialValue: 'columnArticle',

      options: {
        layout: 'radio',
        list: [
          {
            title:
              'Column Article: Use this for articles with less than 5 images',
            value: 'columnArticle',
            icon: ColumnArticleSectionIcon,
          },
          {
            title:
              'Carousel Article: Use this for articles with more than 4 images',
            value: 'carouselArticle',
            icon: ColumnArticleSectionIcon,
          },
        ],
      },
    },

    { type: 'string', name: 'heading' },
    { type: 'bodyPortableText', name: 'body' },
    {
      type: 'array',
      name: 'images',

      of: [{ type: 'mainImage'}],
      validation: (Rule) =>
        Rule.optional().custom((field, context) => {
          if (
            context.parent.articleType === 'columnArticle' &&
            field.length > 4
          ) {
            return 'Only 4 images allowed for column article'
          }
          return true
        }),
    },
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     media: 'icon'
  //   },
  //   prepare({ title = 'No title', media = 'No file extension' }) {
  //     const menuIcon = ColumnArticleSectionIcon
  //     return {
  //       title,
  //       media: <div style={{ height: '64px', width: '64px' }}>{menuIcon}</div>
  //     }
  //   }
  // }
}

export default articlesSection;

