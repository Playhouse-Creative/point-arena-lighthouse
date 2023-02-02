
export default {
  type: 'object',
  name: 'articleSection',
  title: 'Article Section',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      name: 'id',
      type: 'string',
      title: 'ID',
    },
    {
      name: 'articleType',
      type: 'string',
      title: 'Article Type',
      initialValue: 'columnArticle',
      options: {
        layout: 'radio',
        list: [
          {title: 'Column Article', value: 'columnArticle'},
          {title: 'Carousel Article', value: 'carouselArticle'},
        ],
      },
    },

    {
      name: 'columnArticle',
      title: 'Column Article',
      type: 'object',
      fields: [
        {type: 'string', name: 'title'},
        {type: 'bodyPortableText', name: 'body'},
        {
          type: 'array',
          name: 'images',
          of: [{type: 'mainImage'}],
        },
      ],
      hidden: ({parent}) => parent?.articleType !== 'columnArticle',
    },
    {
      name: 'carouselArticle',
      title: 'Carousel Article',
      type: 'object',
      fields: [
        {type: 'string', name: 'title'},
        {type: 'bodyPortableText', name: 'body'},
        {
          type: 'array',
          name: 'images',
          of: [{type: 'mainImage'}],
        },
      ],
      hidden: ({parent}) => parent?.articleType !== 'carouselArticle',
      
    },
  ],
}
