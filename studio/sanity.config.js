import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemaTypes from './schemas/schema'
import deskStructure from './deskStructure'
import { defaultDocumentNode } from './src/defaultDocumentNode'
import {media} from 'sanity-plugin-media'


export default defineConfig({
  name: 'default',
  title: 'Point Arena Lighthouse',

  projectId: '4e76dvod',
  dataset: 'production',

  

  plugins: [deskTool({
    structure: deskStructure,
    defaultDocumentNode,
  }), media()],

  schema: {
    types: schemaTypes,
  },
  
})
