

export type Post = {
  _id: string
  slug: {
    current: string
  }
  title: string
  date: string
  img: string
  mainImage: any
  description: string
  body: any
  publishedAt: string
  author: { name: string; image: any }
  categories: { title: string; color:{title: string; value: string} }[]
}