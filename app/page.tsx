import { getClient, sanityClient } from '@/lib/sanity-server'
import { indexQuery, postSlugsQuery, pageQuery } from '@/lib/queries'
import type { Post } from '@/lib/types'
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

const getPostPreviews = async (preview = false) => {
  const  posts  = await getClient(preview).fetch(indexQuery)
  return {
    posts
  }
}

export default async function Page() {
  const categories = ["Announcements"]
  const title = "Home"
  const posts = await getPostPreviews()
  const sections = await getPage(title)
    return <div className='overflow-hidden'>
      
    <RenderSections sections={sections} posts={posts}/>
    </div>
  }