import { getClient, sanityClient } from '@/lib/sanity-server'
import { postQuery, postSlugsQuery, pageQuery } from '@/lib/queries'
import type { Post } from '@/lib/types'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'
import RenderSections from '../components/renderSections'

export const generateStaticParams = async () => {
  const paths: string[] = await sanityClient.fetch(postSlugsQuery)
  return paths.map(path => ({ slug: path }))
}

const getPage = async (title: string, preview = false) => {
  const { page } = await getClient(preview).fetch(pageQuery, {
    title
  })
  return (
    page.map((data: any) => data.content).flat(1)
		
  )
}

const getPost = async (slug: string, preview = false) => {
  const { post } = await getClient(preview).fetch(postQuery, {
    slug
  })
  return {
    ...post,
  }
}

export default async function Page({params}: any) {
  const slug = "placeholder"
  const title = "Home"
  const post: Post = await getPost(slug)
  const sections = await getPage(title)
    return <div className='overflow-hidden'>
    <RenderSections sections={sections} />
    </div>
  }