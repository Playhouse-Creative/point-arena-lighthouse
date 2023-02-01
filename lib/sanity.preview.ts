import {definePreview} from 'next-sanity/preview'
import {sanityConfig} from './sanity-config'

const {projectId, dataset} = sanityConfig

function onPublicAccessOnly() {
    
  throw new Error(`Unable to load preview as you're not logged in`)
}
export const usePreview = definePreview({projectId, dataset, onPublicAccessOnly})