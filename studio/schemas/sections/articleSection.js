import { min } from "lodash"

const shouldShow = (field) => {
  return field.conditionField === 'show'
}
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
      initialValue: 'sideGalleryArticle',
      options: {
        layout: 'radio',
        list: [
          {title: 'Side Gallery Article', value: 'sideGalleryArticle'},
          {title: 'Carousel Article', value: 'carouselArticle'},
        ],
      },
    },

    {
      name: 'sideGalleryArticle',
      title: 'Side Gallery Article',
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
      hidden: ({parent}) => parent?.articleType !== 'sideGalleryArticle',
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
