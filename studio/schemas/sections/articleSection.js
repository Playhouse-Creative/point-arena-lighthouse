import ColumnArticleSectionIcon from '/static/columnArticleSectionIcon'

export default {
  type: 'object',
  name: 'articleSection',
  title: 'Article',
  icon: ColumnArticleSectionIcon,
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Section Title',
      validation: Rule => Rule.required().max(75).warning('Shorter titles are usually better')
    },
    {
			name: 'id',
			type: 'reference',
      to: [{type: 'id'}],
			title: 'Link ID',
			description: 'This is the ID that will be used in the URL to link to this section. It must be unique.'
		},
    {
      name: 'articleType',
      type: 'string',
      title: 'Article Type',
      initialValue: 'columnArticle',
      options: {
        layout: 'radio',
        list: [
          {title: 'Column Article', value: 'columnArticle', icon: ColumnArticleSectionIcon},
          {title: 'Carousel Article', value: 'carouselArticle'},
        ],
      },
    },

    {
      name: 'columnArticle',
      title: 'Column Article',
      type: 'object',
      icon: ColumnArticleSectionIcon,
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
