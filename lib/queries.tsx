const postFields = `
  _id,
  title,
  date,
  mainImage,
  excerpt,
  authors,
  categories,
  body,
  "slug": slug.current,
`
const pageFields = `
_id,
title, 
content
`

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const pageQuery = `
{
    "page": *[_type == "page" && title == $title] {
        ...${pageFields}
      }
}`

export const postPreviewsQuery = `
{
  "posts": *[_type == "post"] | order(_updatedAt desc) [0..2] {
    ${postFields}
  }
}`

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${postFields}
  }
}`

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export const postUpdatedQuery = `*[_type == "post" && _id == $id].slug.current`
