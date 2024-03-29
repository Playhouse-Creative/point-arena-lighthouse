
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
        return post.category && post.category[0].title !== "Archived"
        // && post.category[0].title !== "Past Events";
    });

    const filteredPreviewPosts = _.filter(posts, (post) => {
        return post.category && post.category[0].title !== "Archived" && post.category[0].title !== "Past Events";
    });

    const eventPosts = _.filter(filteredPosts, post => post.category[0].title === "Event");
    const nonEventPosts = _.filter(filteredPosts, post => post.category[0].title !== "Event");

    const postsOrderedByCreated = _.orderBy(filteredPosts, ['_createdAt'], ['desc']);

    // Reverse the order of the eventPosts array
    const reversedEventPosts = _.reverse([...eventPosts]);

    // Merge the reversedEventPosts array and nonEventPosts array
    const reorderedPosts = [...reversedEventPosts, ...nonEventPosts];

    const previewPostsOrderedByCreated = _.orderBy(filteredPreviewPosts, ['_createdAt'], ['desc']);
    const firstThreePosts = previewPostsOrderedByCreated.slice(1, 4)

    return (
        <>
        <BlogPageHead page={page} />
        <Layout preview={preview} loading={loading}>
            <main>
                <div className='mx-auto mb-24 flex max-w-[1600px] flex-col justify-center md:flex-row '>
                    <div className='group w-full cursor-pointer bg-white p-4 pb-16 h-full md:m-4 md:w-6/12 md:border-[2px] md:border-pa-navy-4 lg:m-12 lg:w-5/12 lg:p-10'>
                        <Link href={`/post/${postsOrderedByCreated[0].slug.current}`} key={posts[0]._id}>
                            <div className='relative w-full aspect-square'>
                                    {postsOrderedByCreated[0].mainImage && (
                                    <Image
                                        src={urlForImage(postsOrderedByCreated[0].mainImage)?.url() || ''}
                                        alt={postsOrderedByCreated[0].title}
                                        fill={true}
                                        style={{ objectFit: 'contain' }}
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'
                                    />
                                )}
                            </div>
                            <h1 className='mt-10 mb-1 text-3xl group-hover:underline'>{postsOrderedByCreated[0].title}</h1>

                            {postsOrderedByCreated[0].category.map((c: any, i: number) => (
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
                                
                            </div>
                            <div>
                                <p>{postsOrderedByCreated[0].excerpt}</p>
                            </div>
                            <p className='mt-2 underline text-pa-blue-4 underline-offset-2'>Read full story</p>
                        </Link>
                    </div>
                    <BlogFeaturedPosts posts={reorderedPosts} />
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
