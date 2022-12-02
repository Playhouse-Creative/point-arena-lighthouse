import S from '@sanity/desk-tool/structure-builder'
import blog from './src/structure/blog'
import landingPages from './src/structure/landingPages'


const hiddenDocTypes = (listItem) =>
  !['route', 'navigationMenu', 'post', 'page', 'siteSettings', 'author', 'category'].includes(
    listItem.getId()
  )

export default () =>
  S.list()
    .title('Content')
    .items([
      blog,
      landingPages,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
