/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { pageStructure, singletonPlugin } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import {
  defineUrlResolver,
  Iframe,
  IframeOptions,
} from 'sanity-plugin-iframe-pane'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'
import authorReference from 'schemas/components/authorReference'
import bodyPortableText from 'schemas/components/bodyPortableText'
import categoryReference from 'schemas/components/categoryReference'
import colorlist from 'schemas/components/colorlist'
import cta from 'schemas/components/cta'
import ctaPlug from 'schemas/components/ctaPlug'
import excerptPortableText from 'schemas/components/excerptPortableText'
import gridListItem from 'schemas/components/gridListItem'
import heroImage from 'schemas/components/heroImage'
import iconListItem from 'schemas/components/iconListItem'
import infoListItem from 'schemas/components/infoListItem'
import link from 'schemas/components/link'
import mainImage from 'schemas/components/mainImage'
import menuLink from 'schemas/components/menuLink'
import portraitImage from 'schemas/components/portraitImage'
import reviewListItem from 'schemas/components/reviewListItem'
import roomCard from 'schemas/components/roomCard'
import route from 'schemas/components/route'
import simpleBlockContent from 'schemas/components/simpleBlockContent'
import tableColumn from 'schemas/components/tableColumn'
import textWithIllustration from 'schemas/components/textWithIllustration'
import author from 'schemas/documents/author'
import category from 'schemas/documents/category'
import linkId from 'schemas/documents/linkId'
import page from 'schemas/documents/page'
import post from 'schemas/documents/post'
import articlesSection  from 'schemas/sections/articlesSection'
import bannerSection  from 'schemas/sections/bannerSection'
import blogPreviewSection  from 'schemas/sections/blogPreviewSection'
import ctaRowSection  from 'schemas/sections/ctaRowSection'
import datePickerSection  from 'schemas/sections/datePickerSection'
import donationsSection  from 'schemas/sections/donationsSection'
import funFactsSection  from 'schemas/sections/funFactsSection'
import heroSection  from 'schemas/sections/heroSection'
import infoRowsSection  from 'schemas/sections/infoRowsSection'
import listSection  from 'schemas/sections/listSection'
import lodgingHeroSection  from 'schemas/sections/lodgingHeroSection'
import newArticleSection  from 'schemas/sections/newArticleSection'
import portraitSection  from 'schemas/sections/portraitSection'
import roomCardsSection  from 'schemas/sections/roomCardsSection'
import smallInfoRowsSection  from 'schemas/sections/smallInfoRowsSection'
import tableSection  from 'schemas/sections/tableSection'






const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  'Point Arena Lighthouse'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  page.name,
  post.name,
]
const PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS = [
  page.name,
  post.name,
] satisfies typeof PREVIEWABLE_DOCUMENT_TYPES
// Used to generate URLs for drafts and live previews
export const PREVIEW_BASE_URL = '/api/draft'
export const iframeOptions = {
  url: defineUrlResolver({
    base: PREVIEW_BASE_URL,
    requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
  }),
  urlSecretId: previewSecretId,
  reload: { button: true },
} satisfies IframeOptions

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      // home,
      // settings,
      // Documents
      author,
      category,
      linkId,
      page,
      post,
      // Objects
      //Sections
      articlesSection,
      bannerSection,
      blogPreviewSection,
      ctaRowSection,
      datePickerSection,
      donationsSection,
      funFactsSection,
      heroSection,
      infoRowsSection,
      listSection,
      lodgingHeroSection,
      newArticleSection,
      portraitSection,
      roomCardsSection,
      smallInfoRowsSection,
      tableSection,
      //Components
      authorReference,
      bodyPortableText,
      categoryReference,
      colorlist,
      cta,
      ctaPlug,
      excerptPortableText,
      gridListItem,
      heroImage,
      iconListItem,
      infoListItem,
      link,
      mainImage,
      menuLink,
      portraitImage,
      reviewListItem,
      roomCard,
      route,
      simpleBlockContent,
      tableColumn,
      textWithIllustration,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, { schemaType }) => {
        if ((PREVIEWABLE_DOCUMENT_TYPES as string[]).includes(schemaType)) {
          return S.document().views([
            // Default form view
            S.view.form(),
            // Preview
            S.view.component(Iframe).options(iframeOptions).title('Preview'),
          ])
        }

        return null
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([]),
    // Add the "Open preview" action
    previewUrl({
      base: PREVIEW_BASE_URL,
      requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
      urlSecretId: previewSecretId,
      matchTypes: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
