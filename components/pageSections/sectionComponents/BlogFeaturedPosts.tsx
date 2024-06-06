import _ from 'lodash'
import Link from 'next/link'
import { useState } from 'react'

import { PostData } from '../../../types'

type Props = { posts: PostData[] }

export default function BlogFeaturedPosts({ posts }: Props) {
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [currentPage, setCurrentPage] = useState<number>(1);

	const postsPerPage = 8;

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;

	const filteredPosts = selectedCategory === 'all'
		? posts
		: posts.filter((post: any) =>
			post.category.some(
				(category: { title: string }) => category.title === selectedCategory
			)
		);

	const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const getPageButtonRange = () => {
		const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

		if (totalPages <= 6) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		if (currentPage <= 3) {
			return [1, 2, 3, 4, '...', totalPages];
		}

		if (currentPage >= totalPages - 2) {
			return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
		}

		return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
	};

	const pageButtonRange = getPageButtonRange();

	// const firstTwelvePosts = posts.slice(0, 12)
	const uniqueCategories = _.uniqBy(
		_.flatMap(posts, (post) => post.category[0]),
		'title'
	);

	return (
		<div className='self-center w-full mx-4 md:w-6/12 md:self-start lg:w-4/12'>
			<div className='flex flex-col p-4 pb-2 bg-white border-b-2 border-b-pa-navy-3'>
				<h2 className='mb-2 text-2xl'>Featured Posts</h2>
				<div className='flex justify-center w-full mx-auto'>
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
				<div className="flex justify-center my-4">
					<button
						className="mx-1 px-3 py-1 bg-gray-200 font-semibold"
						onClick={() => paginate(currentPage - 1)}
						disabled={currentPage === 1}
					>
						&lt;
					</button>
					{pageButtonRange.map((pageNumber, index) =>
						typeof pageNumber === 'number' ? (
							<button
								key={pageNumber}
								className={`mx-1 px-3 py-1 ${currentPage === pageNumber ? 'bg-pa-navy-4 text-white' : 'bg-gray-200'
									}`}
								onClick={() => paginate(pageNumber)}
							>
								{pageNumber}
							</button>
						) : (
							<span key={`ellipsis-${index}`} className="mx-1 px-3 py-1">
								...
							</span>
						)
					)}
					<button
						className="mx-1 px-3 py-1 bg-gray-200 font-semibold"
						onClick={() => paginate(currentPage + 1)}
						disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
					>
						&gt;
					</button>
				</div>
				{/* {selectedCategory === 'all'
					? firstTwelvePosts.slice(1).map((post: any, i: number) => (
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
									{new Date(post.publishedAt).toLocaleDateString()}
									</p>
								</div>
							</Link>))
					: posts
							.filter((posts: any) =>
								posts.category.some(
									(category: { title: string }) =>
										category.title === selectedCategory
								)
							)
							.slice(0, 12) */}
				{currentPosts.map((post: any) => (
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
										{post.publishedAt && (
											<p className='text-sm text-gray-700'>
												{new Date(post.publishedAt).toLocaleDateString()}
											</p>
										)}
										
									</div>
								</Link>
							))}
			</div>
		</div>
	)
}
