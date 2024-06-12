import Layout from 'components/shared/Layout'
import Image from 'next/image'
import PortableText from 'react-portable-text'
import type { PostPagePayload } from 'types'

import serializers from '../../../lib/portableText-serializers'
import { urlForImage } from '../../../lib/sanity.image'
import BlogPreviewSection from '../../pageSections/BlogPreviewSection'
import PostPageHead from './PostPageHead'

export interface PageProps {
    post: PostPagePayload
    preview?: boolean
    loading?: boolean
}

export function PostPage({
    post,
    preview,
    loading,
}: PageProps) {
    // Default to an empty object to allow previews on non-existent documents


    return (
        <>
            <PostPageHead page={post}/>

            <Layout preview={preview} loading={loading}>
                <div>
                    <div className='relative top-4 z-0 mx-auto aspect-[6/5] h-[50vh] w-full max-w-4xl md:h-[60vh]'>
                        {post.mainImage && (
                            <Image
                                alt={post.title}
                                src={urlForImage(post.mainImage)?.url()!}
                                fill={true}
                                priority={true}
                                quality={80}
                                style={{ objectFit: 'contain' }}
                                sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw'
                            />
                        )}
                    </div>
                    <article className='max-w-4xl p-5 mx-auto'>
                        <h1 className='lg:mt-10 mt-4 mb-1 text-3xl'>{post.title}</h1>
                        {post.categories &&
                            post.categories.map((category, i: number) => (
                                <p className='text-md' style={{ color: category.color.value }} key={i}>
                                    {category.title}
                                </p>
                            ))}
                        {post.publishedAt && <div className='mb-1 text-base text-gray-700 '>
                            {post.publishedAt && <div className='mb-1 text-base text-gray-700 '>
                                {new Date(post.publishedAt).toLocaleDateString()}
                            </div>}
                        </div>}
                        <div className='my-10'>
                            <PortableText
                                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                                content={post.body || []}
                                serializers={serializers()}
                            />
                        </div>
                    </article>
                    <h2 className='pt-10 text-4xl text-center text-white text-bold bg-pa-blue-4'>
                        You might also like...
                    </h2>
                    <BlogPreviewSection posts={post.previewPostData} title='' />
                </div>
            </Layout>
        </>
    )
}
