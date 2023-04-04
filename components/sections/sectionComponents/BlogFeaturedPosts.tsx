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
		<div className=' w-full md:w-6/12 lg:w-4/12 self-center md:self-start mx-4'>
			<div className=' flex flex-col border-b-2 border-b-pa-navy-3 bg-white p-4 pb-2 '>
				<h2 className='mb-2 text-2xl'>Featured Posts</h2>
				<div className='-ml-2 flex w-full justify-start'>
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
							className='m-1 sm:m-2 px-3 py-1 font-light '
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
			<div className='flex w-full flex-col divide-y overflow-hidden bg-white '>
				{selectedCategory === 'all'
					? firstEightPosts.slice(1).map((post: any, i: number) => (
							<Link
								href={`/post/${post.slug.current}`}
								key={post._id}
								className=' group cursor-pointer p-4 pl-2'>
								<div className=' flex w-full justify-between'>
									<h3 className='mb-3 w-8/12 text-xl group-hover:underline'>
										{post.title}
									</h3>
									{post.category.map((c: any, i: number) => (
										<p
											key={i}
											style={{
												color: `${c.color.value}`,
											}}>
											{c.title}
										</p>
									))}
								</div>
								<div className='flex w-full justify-between'>
									<p className='text-sm text-gray-700'>
										{post.author.name}
									</p>
									<p className='text-sm text-gray-700'>
										{post.publishedAt
											.replace(/-/g, '/')
											.replace(/T.+/, '')}
									</p>
								</div>
							</Link>
					  ))
					: firstEightPosts
							.slice(1)
							.filter(
								(posts: any) =>
								posts.category.some( (category: any) => category.title === selectedCategory)
							)
							.map((post: any, i: number) => (
								<Link
									href={`/post/${post.slug.current}`}
									key={post._id}
									className=' group cursor-pointer p-4 pl-2'>
									<div className=' flex w-full justify-between'>
										<h3 className='mb-3 w-full text-xl group-hover:underline'>
											{post.title}
										</h3>
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
									</div>
									<div className='flex w-full justify-between'>
										<p className='text-sm text-gray-700'>
											{post.author.name}
										</p>
										<p className='text-sm text-gray-700'>
											{post.publishedAt
												.replace(/-/g, '/')
												.replace(/T.+/, '')}
										</p>
									</div>
								</Link>
							))}
			</div>
		</div>
	)
}
