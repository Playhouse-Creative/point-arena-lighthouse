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
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'heroSection' },
        { type: 'infoRowsSection' },
        { type: 'smallInfoRowsSection' },
        { type: 'ctaRowSection' },
        { type: 'funFactsSection'},
        { type: 'blogPreviewSection' },
        { type: 'lodgingHeroSection'},
        { type: 'datePickerSection'}
      ]
    }
  ]
}
