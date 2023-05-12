import { useState } from 'react'
import Link from 'next/link'
import _ from 'lodash'
import { PostData } from '../../../lib/types'

type Props = { posts: PostData[] }



export default function BlogFeaturedPosts({ posts }: Props) {
	const [selectedCategory, setSelectedCategory] = useState('all')
	const firstEightPosts = posts.slice(0, 8)
	const uniqueCategories = _.uniqBy(
		_.flatMap(posts, (post) => post.category[0]),
		'title'
	)

	return (
		<div className='self-center w-full mx-4 md:w-6/12 lg:w-4/12 md:self-start'>
			<div className='flex flex-col p-4 pb-2 bg-white border-b-2 border-b-pa-navy-3'>
				<h2 className='mb-2 text-2xl'>Featured Posts</h2>
				<div className='flex justify-start w-full -ml-2'>
					<button
						className={`m-1 sm:m-2 px-3 py-1 font-light  ${
							selectedCategory === 'all'
								? 'bg-pa-navy-4 text-white'
								: 'bg-gray-200'
						}`}
						onClick={() => setSelectedCategory('all')}>
						All
					</button>
					{uniqueCategories.map((category: any, i: number) => (
						<button
							className='px-3 py-1 m-1 font-light sm:m-2 '
							style={{
								color:
									selectedCategory === category.title
										? 'white'
										: 'black',
								backgroundColor:
									selectedCategory === category.title
										? category.color.value
										: '#e5e7eb',
							}}
							key={i}
							onClick={() => setSelectedCategory(category.title)}>
							{category.title}
						</button>
					))}
				</div>
			</div>
			<div className='flex flex-col w-full overflow-hidden bg-white divide-y '>
				{selectedCategory === 'all'
					? firstEightPosts.slice(1).map((post: any, i: number) => (
							<Link
								href={`/post/${post.slug.current}`}
								key={post._id}
								className='p-4 pl-2 cursor-pointer group'>
								<div className='flex justify-between w-full '>
									<h3 className='w-8/12 mb-3 text-xl group-hover:underline'>
										{post.title}
									</h3><div className='flex flex-col text-right'>
									{post.category.map((c: any, i: number) => (
										<p
											key={i}
											style={{
												color: `${c.color.value}`,
											}}>
											{c.title}
										</p>
									))}</div>
								</div>
								<div className='flex justify-between w-full'>
									{post.author && <p className='text-sm text-gray-700'>
										{post.author.name}
									</p>}
									<p className='text-sm text-gray-700'>
										{post.publishedAt && post.publishedAt
											.replace(/-/g, '/')
											.replace(/T.+/, '')}
									</p>
								</div>
							</Link>
					  ))
					: posts
					.filter((posts: any) =>
					  posts.category.some(
						(category: {title: string}) => category.title === selectedCategory
					  )
					)
					.slice(0, 8)
							.map((post: any) => (
								<Link
									href={`/post/${post.slug.current}`}
									key={post._id}
									className='p-4 pl-2 cursor-pointer group'>
									<div className='flex justify-between w-full '>
										<h3 className='w-full mb-3 text-xl group-hover:underline'>
											{post.title}
										</h3><div className='flex flex-col text-right'>
										{post.category.map(
											(c: any, i: number) => (
												<p
													key={i}
													style={{
														color: `${c.color.value}`,
													}}>
													{c.title}
												</p>
											)
										)}
									</div></div>
									<div className='flex justify-between w-full'>
										{post.author && <p className='text-sm text-gray-700'>
											{post.author.name}
										</p>}
										{post.poublishedAt &&<p className='text-sm text-gray-700'>
											{post.publishedAt
												.replace(/-/g, '/')
												.replace(/T.+/, '')}
										</p>}
									</div>
								</Link>
							))}
			</div>
		</div>
	)
}
