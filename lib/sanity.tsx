import createImageUrlBuilder from '@sanity/image-url'
import { sanityConfig } from './sanity-config'

type image = {
  asset: {
    _id: string
    url: string
  }
}

export const imageBuilder = createImageUrlBuilder(sanityConfig)

export const urlForImage = (source: image) =>
  imageBuilder.image(source).fit('max')