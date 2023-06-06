export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  __experimental_actions: [
    /* "create", "delete", */ "update", "publish"
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug', 
      hidden: true
    },
    {name: 'id',
  type: 'string',
  title: 'ID',
  hidden: true
},
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'articlesSection' },
        { type: 'bannerSection' },
        { type: 'heroSection' },
        { type: 'infoRowsSection' },
        { type: 'listSection'},
        { type: 'tableSection'},
        { type: 'portraitSection'},
        { type: 'ctaRowSection' },
        { type: 'funFactsSection'},
        { type: 'blogPreviewSection' },
        { type: 'lodgingHeroSection'},
        { type: 'roomCardsSection'},
        { type: 'donationsSection'},
      ]
    }
  ]
}
