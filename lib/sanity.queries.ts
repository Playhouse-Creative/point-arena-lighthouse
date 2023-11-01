import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

const pageFields = groq`
  ...,
		content[] {..., linkId->{..., linkId},rows[] {..., cta{..., anchorLink->{..., linkId}}}, cta[]{..., anchorLink->{..., linkId}}},
`

export const pageQuery = (pageName: string) => groq`{
	"pageSections": *[_type == "page" && id == "${pageName}"] 
	{...,
		content[] {..., linkId->{..., linkId},rows[] {..., cta{..., anchorLink->{..., linkId}}}, cta[]{..., anchorLink->{..., linkId}}},
		
	}
  ,

"postData" :*[_type == "post"] | order(publishedAt desc)[0...10]
{_id,
_createdAt,
title,
slug,
author->{name, image},
publishedAt,
excerpt,
'category': categories[]-> { title, color },
mainImage,
description,
body, 
	}
  }`


export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
export const pageBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
  ${pageFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  _updatedAt?: string;
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
