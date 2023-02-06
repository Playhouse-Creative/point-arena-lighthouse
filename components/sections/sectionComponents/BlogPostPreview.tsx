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
		<div className='group'><Link href={`/post/${post.slug.current}`} key={post._id}>
			<div className='group overflow-hidden bg-white'>
				
				<div className='relative aspect-square w-full mb-12 bg-white text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
					<Image
						src={urlForImage(props.mainImage).url()}
						alt='placeholder'
						fill={true}
						style={{ objectFit: 'cover' }}
					/>
					<div
				className='absolute left-0 -bottom-5 w-11/12 py-[5px] '
				style={{
					backgroundColor: `${props.category[0].color.value}`,
					boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
					clipPath:
						'polygon(100% 0%, 96% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)',
				}}>
				{' '}
				<h3 className='font-serif text-2xl font-semibold text-white '>
					{props.category[0].title}
				</h3>
			</div>
				</div>
				<div className='mx-6 mb-12 h-60'>
					
					<h2 className='text-lg font-semibold group-hover:underline underline-offset-4 mb-1'>{props.title}</h2>
					<div className='mb-1 text-sm text-gray-700 '>
						{post.publishedAt.replace(/-/g, '/').replace(/T.+/, '')}
					</div>
					<div>
						<p>{post.excerpt}</p>
					</div>
					<p className='text-pa-blue-4'>Read more...</p>
				</div>
			</div></Link>
		</div>
	)
}

export default BlogPostPreview
