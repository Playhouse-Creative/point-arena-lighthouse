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
		<Link href={`/posts/${post.slug.current}`} key={post._id}>
			<div className='group cursor-pointer overflow-hidden rounded-lg border bg-white'>
				<div className='relative h-72 w-full transition-transform duration-200 ease-in-out group-hover:scale-105'>
					<Image
						src={urlForImage(props.mainImage).url()}
						alt='placeholder'
						fill={true}
						style={{ objectFit: 'cover' }}
					/>
				</div>
				<div className='border-t-2 p-4'>
					<h3 className='my-2 text-2xl font-semibold group-hover:underline'>
						{post.title}
					</h3>
					<div className={'flex'}>
						{post.category &&
							post.category.map((category: any, i: number) => (
								<h4
									key={i}
									className={'mb-1 text-sm text-gray-500'}>
									{category.title},
								</h4>
							))}
					</div>
					<div className='mb-1 text-sm text-gray-700'>
						{post.publishedAt.replace(/-/g, '/').replace(/T.+/, '')}
					</div>
					<div>
						{post.excerpt &&
							post.excerpt.map((e: any, i: number) => (
								<PortableText content={[e]} key={i} />
							))}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default BlogPostPreview
