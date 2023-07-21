import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemaTypes from './schemas/schema'
import deskStructure from './deskStructure'
import { previewDocumentNode } from 'plugins/previewPane'
import {media} from 'sanity-plugin-media'


export default defineConfig({
  name: 'default',
  title: 'Point Arena Lighthouse',

  projectId: '4e76dvod',
  dataset: 'production',
  

  

  plugins: [deskTool({
    structure: deskStructure,
    defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
  }), media()],

  schema: {
    types: schemaTypes,
  },
  
})
