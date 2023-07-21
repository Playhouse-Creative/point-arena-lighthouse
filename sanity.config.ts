/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */
import schemaTypes from './studio/schemas/schema'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { productionUrl } from 'plugins/productionUrl'
import { media } from 'sanity-plugin-media'
// import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
// import schema from './studio/schemas/schema'
// import authorType from 'schemas/author'
// import postType from 'schemas/post'
// import settingsType from 'schemas/settings'

const title =
    "Point Arena Lighthouse"

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    title,
    schema: {
        // If you want more content types, you can add them to this array
        types: schemaTypes,
    },
    plugins: [
        deskTool({
            // structure: 
            // settingsStructure(settingsType),
            // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
            defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
        }),
        // Configures the global "new document" button, and document actions, to suit the Settings document singleton
        // settingsPlugin({ type: settingsType.name }),
        // Add the "Open preview" action
        productionUrl({
            apiVersion,
            previewSecretId,
            // types: [postType.name, settingsType.name],
            types: schemaTypes.map((type) => type.name),
            
        }),
        
        
    ],
})
