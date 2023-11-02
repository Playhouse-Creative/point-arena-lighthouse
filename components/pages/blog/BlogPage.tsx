
import _ from 'lodash'
import Image from 'next/image'
import Link from 'next/link'
import type { BlogPagePayload } from 'types'

import { urlForImage } from '../../../lib/sanity.image'
import BlogPreviewSection from '../../pageSections/BlogPreviewSection'
import BlogFeaturedPosts from '../../pageSections/sectionComponents/BlogFeaturedPosts'
import Layout from '../../shared/Layout'
import BlogPageHead from './BlogPageHead'

export interface BlogPageProps {
    page: BlogPagePayload
    preview?: boolean
    loading?: boolean
}

const BlogPage = ({ page, preview, loading }: BlogPageProps) => {
    const posts = _.flatMap(page)
    const filteredPosts = _.filter(posts, (post) => {
        return post.category[0].title !== "Archived" 
        // && post.category[0].title !== "Past Events";
    });
    const firstThreePosts = filteredPosts.slice(1, 4)

    return (
        <>
        <BlogPageHead page={page} />
        <Layout preview={preview} loading={loading}>
            <main>
                <div className='mx-auto mb-24 flex max-w-[1600px] flex-col justify-center md:flex-row '>
                    <div className='group w-full cursor-pointer bg-white p-4 pb-16 h-full md:m-4 md:w-6/12 md:border-[2px] md:border-pa-navy-4 lg:m-12 lg:w-5/12 lg:p-10'>
                        <Link href={`/post/${filteredPosts[0].slug.current}`} key={posts[0]._id}>
                            <div className='relative w-full aspect-square'>
                                    {filteredPosts[0].mainImage && (
                                    <Image
                                        src={urlForImage(filteredPosts[0].mainImage)?.url() || ''}
                                        alt={filteredPosts[0].title}
                                        fill={true}
                                        style={{ objectFit: 'contain' }}
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'
                                    />
                                )}
                            </div>
                            <h1 className='mt-10 mb-1 text-3xl group-hover:underline'>{filteredPosts[0].title}</h1>

                            {filteredPosts[0].category.map((c: any, i: number) => (
                                <p
                                    className='text-md'
                                    style={{
                                        color: `${c.color.value}`,
                                    }}
                                    key={i}
                                >
                                    {c.title}
                                </p>
                            ))}
                            <div className='flex flex-col items-start mt-4'>
                                <div className='relative w-16 h-16 space-x-2 rounded-full'>
                                    {filteredPosts[0].author && (
                                        <Image
                                            fill={true}
                                            style={{ objectFit: 'contain' }}
                                            className=''
                                            src={urlForImage(filteredPosts[0].author.image)?.url()!}
                                            alt={filteredPosts[0].author.name}
                                            sizes='(max-width: 768px) 15vw,
              					(max-width: 1200px) 15vw,
              					15vw'
                                        />
                                    )}
                                </div>
                                {filteredPosts[0].author && (
                                    <p className='mb-2 text-sm font-light'>
                                        Blog post by <span className='text-pa-green-4'>{filteredPosts[0].author.name}</span> <br />
                                        published at {new Date(filteredPosts[0].publishedAt).toLocaleString()}
                                    </p>
                                )}
                            </div>
                            <div>
                                <p>{filteredPosts[0].excerpt}</p>
                            </div>
                            <p className='mt-2 underline text-pa-blue-4 underline-offset-2'>Read full story</p>
                        </Link>
                    </div>
                    <BlogFeaturedPosts posts={filteredPosts} />
                </div>

                <h2 className='pt-10 text-2xl text-center text-white text-bold bg-pa-blue-4 sm:text-4xl'>
                    You might also like...
                </h2>
                <BlogPreviewSection posts={firstThreePosts} title='' />
            </main>
        </Layout>
        </>
    )
}


export default BlogPage
