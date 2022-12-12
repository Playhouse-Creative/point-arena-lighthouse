import { createClient } from 'next-sanity'
import { sanityConfig } from './sanity-config'

export const sanityClient = createClient(sanityConfig)

export const previewClient = createClient({
  ...sanityConfig,
 useCdn: true,
  token: process.env.SANITY_API_TOKEN
})

export const getClient = (preview: boolean) =>
  preview ? previewClient : sanityClient