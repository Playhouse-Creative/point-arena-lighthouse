import { sanityClient } from '@/lib/sanity-server'
import PageLayout from '../components/PageLayout'
import _ from 'lodash'
import BlogPreviewSection from '../components/sections/BlogPreviewSection'
import { urlForImage } from '@/lib/sanity'
import Img from 'next/image'
import Link from 'next/link'
import PortableText from 'react-portable-text'
import BlogFeaturedPosts from '@/components/sections/sectionComponents/BlogFeaturedPosts'

type Props = {
	posts: any
	postData: any
}

const Blog = ({ postData }: Props) => {
	const { postData: posts } = postData
	const firstThreePosts = posts.slice(0, 3)

	return (
		<PageLayout
			title='Point Arena Lighthouse'
			description='Come stay at the Point Arena Lighthouse!'>
			<main>
				<div className='mx-auto mb-24 flex flex-col md:flex-row max-w-[1600px] justify-center'>
					
					<div className='group md:m-4 lg:m-12 w-full lg:w-5/12 md:w-6/12 cursor-pointer md:border-[2px] md:border-pa-navy-4 bg-white p-4 lg:p-10 pb-16'>
					<Link href={`/post/${posts[0].slug.current}`} key={posts[0]._id}>
						<div className='relative aspect-square w-full'>
							<Img
								src={urlForImage(posts[0].mainImage).url()}
								alt='placeholder'
								fill={true}
								style={{ objectFit: 'cover' }}
							/>
						</div>
						<h1 className='mt-10 mb-1 text-3xl group-hover:underline'>
							{posts[0].title}
						</h1>

						{posts[0].category.map((c: any, i: number) => (
							<p
								className='text-md'
								style={{
									color: `${c.color.value}`,
								}}
								key={i}>
								{c.title}
							</p>
						))}
						<div className='mt-4 flex flex-col items-start space-x-2 '>
							<div className='relative h-16 w-16 space-x-2 rounded-full'>
								<Img
									fill={true}
									style={{ objectFit: 'contain' }}
									className=''
									src={
										urlForImage(
											posts[0].author.image
										).url()!
									}
									alt={posts[0].author.name}
								/>
							</div>
							<p className='text-sm font-light'>
								Blog post by{' '}
								<span className='text-pa-green-4'>
									{posts[0].author.name}
								</span>{' '}
								<br />
								published at{' '}
								{new Date(
									posts[0].publishedAt
								).toLocaleString()}
							</p>
						</div>
						<div>
							{posts[0].excerpt.map((e: any, i: number) => (
								<PortableText
									content={[e]}
									key={i}
									className='mt-10 h-auto font-light truncate-3-lines'
								/>
							))}
						</div><p className='underline underline-offset-2 text-pa-blue-4 mt-2'>Read full story</p>
						</Link></div>
					<BlogFeaturedPosts posts={posts} />
					{/* <div className=' h-full mt-12'>
						<div className=' flex w-full flex-col border-b-2 border-b-pa-navy-3 p-4 pb-2 bg-white '>
							<h2 className='text-2xl mb-2'>Featured Posts</h2>
							<div className='-ml-2 flex w-full justify-start'>
								<button
									className={`m-2 px-3 py-1 font-light  ${
										selectedCategory === 'all'
											? 'bg-pa-navy-4 text-white'
											: 'bg-gray-200'
									}`}
									onClick={() => setSelectedCategory('all')}>
									All
								</button>
								{uniqueCategories.map(
									(category: any, i: number) => (
										<button
											className='m-2 px-3 py-1 font-light '
											style={{
												color:
													selectedCategory ===
													category.title
														? 'white'
														: 'black',
												backgroundColor:
													selectedCategory ===
													category.title
														? category.color.value
														: '#e5e7eb',
											}}
											key={i}
											onClick={() =>
												setSelectedCategory(
													category.title
												)
											}>
											{category.title}
										</button>
									)
								)}
							</div>
						</div>
						<div className='flex w-full flex-col divide-y overflow-hidden bg-white '>
							{selectedCategory === 'all'
								? firstEightPosts.slice(1).map((post: any, i: number) => (
										<Link href={`/post/${post.slug.current}`} key={post._id} className=' p-4 pl-2 group cursor-pointer'>
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
								  ))
								: firstEightPosts
										.slice(1)
										.filter(
											(post: any) =>
												post.category[0].title ===
												selectedCategory
										)
										.map((post: any, i: number) => (
											<Link href={`/post/${post.slug.current}`} key={post._id} className=' p-4 pl-2 group cursor-pointer'>
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
					</div> */}
				</div>

				<h2 className='text-bold bg-pa-blue-4 pt-10 text-center text-4xl text-white'>
					You might also like...
				</h2>
				<BlogPreviewSection posts={firstThreePosts} title='' />
			</main>
		</PageLayout>
	)
}

const query = `{"postData" :*[_type == "post"] | order(publishedAt desc)
{_id,
	_createdAt,
	title,
	slug,
	author->{name, image},
  publishedAt,
  excerpt,
  'category': categories[]-> { title, color },
  mainImage,
  description,
  body, }
  }
  `

export async function getStaticProps() {
	const postData = await sanityClient.fetch(query)

	return {
		props: {
			postData,
		},
	}
}

export default Blog
