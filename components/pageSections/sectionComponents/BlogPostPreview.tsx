import Img from 'next/image'
import Link from 'next/link'

import { urlForImage } from '../../../lib/sanity.image'
import { Post } from '../../../types'

const BlogPostPreview = (post: Post) => {
	return (
		<div className='group'>
			<Link href={`/post/${post.slug.current}`} key={post._id}>
				<div className='overflow-hidden bg-white group'>
					<div className='relative w-full mb-12 text-center transition-colors bg-white shadow-lg aspect-square group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
						<Img
							src={urlForImage(post.mainImage)?.width(500).height(500).fit('crop').url() || ''}
							width={500}
							height={500}
							alt={`${post.title} cover image`}
							// fill={true}
							// style={{ objectFit: 'cover'}}
							sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw'
						/>
						<div
							className='absolute left-0 -bottom-5 w-11/12 py-[5px] '
							style={{
								backgroundColor: `${post.category && post.category[0].color.value}`,
								boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
								clipPath:
									'polygon(100% 0%, 96% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)',
							}}>
							{' '}
							<h3 className='font-serif text-2xl font-semibold text-white '>
								{post.category && post.category[0].title}
							</h3>
						</div>
					</div>
					<div className='mx-6 mb-12 h-60'>
						<h2 className='mb-1 font-sans text-lg font-semibold underline-offset-4 group-hover:underline'>
							{post.title}
						</h2>
						<div className='mb-1 text-sm text-gray-700 '>
							{new Date(post.publishedAt).toLocaleDateString()}
						</div>
						<div>
							<p className='text-sm md:text-base'>
								{post.excerpt}
							</p>
						</div>
						<p className='text-pa-blue-4'>Read more...</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BlogPostPreview
