import type { PortableTextBlock } from '@portabletext/types'
import { DatetimeDefinition,Slug } from '@sanity/types'
import type { Image } from 'sanity'


export type PostData = {
  postData: PostData[]
  _id: string
  slug: Slug
  title: string
  date: string
  img: string
  mainImage: {
    asset: {
      _id: string
      url: string
    }
  }
  description: string
  body: PortableTextBlock[]
  publishedAt: string
  author: { name: string; image: any }
  excerpt: string
  category: {
    title: string
    color: { title: string; value: string }
  }[]
  categories: {
    title: string
    color: { title: string; value: string }
  }[]
}

export type Post = {
  [x: string]: any
  postData: PostData
}

export type CTA = {
  _id: string
  _type: string
  title: string
  anchorLink: {
    slug: {
      current: any
      linkId: {
        current: string
      }
    }
    linkId: { current: string }
  }
  description: string
  link: string
  linkId: { linkId: { current: string } }
  route: string
  landingPageRoute: { slug: Slug }
  slug: Slug
  kind: string
  buttonActionClass: string
  linkText: string
  image: {
    _type: string
    _key: string
    _ref: string
  }
}

// Page payloads

export interface BlogPagePayload {
  posts?: PostData[]
  client?: string
  title?: string
  slug: Slug
  publishedAt?: DatetimeDefinition
  mainImage?: Image
  excerpt?: string
  author?: { name: string; image: any }
  description?: PortableTextBlock[]
  body?: PortableTextBlock[]
  categories?: {
    title: string
    color: { title: string; value: string }
  }[]
}

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface PostPagePayload {
  client?: string
  title: string
  slug: Slug
  publishedAt?: DatetimeDefinition
  mainImage?: Image
  excerpt?: string
  author?: { name: string; image: any }
  description?: PortableTextBlock[]
  body?: PortableTextBlock[]
  categories?: {
    title: string
    color: { title: string; value: string }
  }[]
  previewPostData: PostData[]
}


