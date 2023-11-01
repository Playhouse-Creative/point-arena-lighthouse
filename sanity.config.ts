/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { pageStructure, singletonPlugin } from '@/plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import {
    defineUrlResolver,
    Iframe,
    IframeOptions,
} from 'sanity-plugin-iframe-pane'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'
import page from 'schemas/documents/page'


const title =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
    'Next.js Personal Website with Sanity.io'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
    
    page.name,
    
]
const PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS = [
    page.name
    
]satisfies typeof PREVIEWABLE_DOCUMENT_TYPES
// Used to generate URLs for drafts and live previews
export const PREVIEW_BASE_URL = '/api/preview'
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
            
            // Documents
            
            page,
            
            // Objects
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
        // Add an image asset source for Unsplash
        
        // Vision lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
    ],
})