import Link from 'next/link'
import { urlForImage } from '@/lib/sanity'
import PortableText from 'react-portable-text'
import Image from 'next/image'

type Props = {
	_id: string
	slug: any
	current: any
	mainImage: any
	title: string
	category: any
    excerpt: any
    publishedAt: string
}

const BlogPostPreview = (props: Props) => {
	const post = props
	return (
		<div>
			<div className='group overflow-hidden bg-white'>
				
				<div className='relative aspect-square w-full mb-12 bg-white text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
					<Image
						src={urlForImage(props.mainImage).url()}
						alt='placeholder'
						fill={true}
						style={{ objectFit: 'cover' }}
					/>
					<Link href={`/posts/${post.slug.current}`} key={post._id}><div
				className='absolute left-0 -bottom-5 w-11/12 py-[5px] bg-pa-teal-4'
				style={{
					
					boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
					clipPath:
						'polygon(100% 0%, 96% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)',
				}}>
				{' '}
				<h2 className='font-serif text-2xl font-semibold text-white'>
					{props.title}
				</h2>
			</div></Link>
				</div>
				<div className='mx-6 mb-12'>
					
					<div className='mb-1 text-sm text-gray-700'>
						{post.publishedAt.replace(/-/g, '/').replace(/T.+/, '')}
					</div>
					<div>
						{post.excerpt &&
							post.excerpt.map((e: any, i: number) => (
								<PortableText content={[e]} key={i} />
							))}
					</div>
					<Link href={`/posts/${post.slug.current}`} key={post._id}><p className='underline underline-offset-2 text-pa-blue-4'>Read More</p></Link>
				</div>
			</div>
		</div>
	)
}

export default BlogPostPreview
