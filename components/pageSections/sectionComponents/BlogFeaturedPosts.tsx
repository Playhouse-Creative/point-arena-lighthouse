import _ from 'lodash'
import Link from 'next/link'
import { useState } from 'react'

import { PostData } from '../../../types'

type Props = { posts: PostData[] }

export default function BlogFeaturedPosts({ posts }: Props) {
	const [selectedCategory, setSelectedCategory] = useState('all')
	// Filter out posts that are archived or past events
	const filteredPosts = _.filter(posts, (post) => {
		return post.category[0].title !== "Archived" && post.category[0].title !== "Past Events";
	});
	// We are separating the posts into two arrays, eventPosts and nonEventPosts so we can reverse the order of the eventPosts array.
	// Client wanted the events to go from oldest to newest.
	// The feed is served in the order that the posts were published and he doesn't always fill in the publish date though
	// so in the end the post order will still probably be arbitrary.
	// We could add an event date to the post schema and sort by that instead of the publish date but it's outside of the scope of this project.
	const eventPosts = _.filter(filteredPosts, post => post.category[0].title === "Event");
	const nonEventPosts = _.filter(filteredPosts, post => post.category[0].title !== "Event");

	// Reverse the order of the eventPosts array
	const reversedEventPosts = _.reverse([...eventPosts]);

	// Merge the reversedEventPosts array and nonEventPosts array
	const reorderedPosts = [...reversedEventPosts, ...nonEventPosts];
	const firstEightPosts = reorderedPosts.slice(0, 8)
	const uniqueCategories = _.uniqBy(
		_.flatMap(reorderedPosts, (post) => post.category[0]),
		'title'
	);

	return (
		<div className='self-center w-full mx-4 md:w-6/12 md:self-start lg:w-4/12'>
			<div className='flex flex-col p-4 pb-2 bg-white border-b-2 border-b-pa-navy-3'>
				<h2 className='mb-2 text-2xl'>Featured Posts</h2>
				<div className='flex justify-start w-full -ml-2'>
					<button
						className={`m-1 px-3 py-1 font-light sm:m-2  ${
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
									</h3>
									<div className='flex flex-col text-right'>
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
								</div>
								<div className='flex justify-between w-full'>
									{post.author && (
										<p className='text-sm text-gray-700'>
											{post.author.name}
										</p>
									)}
									<p className='text-sm text-gray-700'>
										{post.publishedAt &&
											post.publishedAt
												.replace(/-/g, '/')
												.replace(/T.+/, '')}
									</p>
								</div>
							</Link>))
					: reorderedPosts
							.filter((reorderedPosts: any) =>
								reorderedPosts.category.some(
									(category: { title: string }) =>
										category.title === selectedCategory
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
										</h3>
										<div className='flex flex-col text-right'>
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
									</div>
									<div className='flex justify-between w-full'>
										{post.author && (
											<p className='text-sm text-gray-700'>
												{post.author.name}
											</p>
										)}
										{post.poublishedAt && (
											<p className='text-sm text-gray-700'>
												{post.publishedAt
													.replace(/-/g, '/')
													.replace(/T.+/, '')}
											</p>
										)}
									</div>
								</Link>
							))}
			</div>
		</div>
	)
}
