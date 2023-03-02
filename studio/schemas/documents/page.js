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
      type: 'string',
      title: 'Slug', 
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
        { type: 'articleSection'},
        { type: 'listSection'},
        { type: 'tableSection'},
        { type: 'portraitSection'},
        { type: 'ctaRowSection' },
        { type: 'funFactsSection'},
        { type: 'blogPreviewSection' },
        { type: 'lodgingHeroSection'},
        { type: 'roomCardsSection'}
      ]
    }
  ]
}
