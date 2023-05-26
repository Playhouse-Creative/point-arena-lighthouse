import { sanityClient } from '@/lib/sanity-server'
import PageLayout from '../components/PageLayout'
import _ from 'lodash'
import BlogPreviewSection from '../components/sections/BlogPreviewSection'
import { urlForImage } from '@/lib/sanity'
import Img from 'next/image'
import Link from 'next/link'
import BlogFeaturedPosts from '@/components/sections/sectionComponents/BlogFeaturedPosts'
import { Post } from '@/lib/types'
import { PostData } from '../lib/types';

type Props = {
	
	 postData: PostData[]
}

const Blog = ({ postData }: Props) => {
	const  posts  = _.flatMap(postData)
	const firstThreePosts = posts.slice(0, 3)

	return (
		<PageLayout
			title='Point Arena Lighthouse'
			description='Come stay at the Point Arena Lighthouse!'>
			<main>
				<div className='mx-auto mb-24 flex max-w-[1600px] flex-col justify-center md:flex-row'>
					<div className='group w-full cursor-pointer bg-white p-4 pb-16 md:m-4 md:w-6/12 md:border-[2px] md:border-pa-navy-4 lg:m-12 lg:w-5/12 lg:p-10'>
						<Link
							href={`/post/${posts[0].slug.current}`}
							key={posts[0]._id}>
							<div className='relative w-full aspect-square'>
							{posts[0].mainImage && (<Img
									src={urlForImage(posts[0].mainImage).url()}
									alt={posts[0].title}
									fill={true}
									style={{ objectFit: 'contain' }}
									sizes='(max-width: 768px) 100vw,
              					(max-width: 1200px) 50vw,
              					40vw'
								/>
								)}
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
							<div className='flex flex-col items-start mt-4'>
								<div className='relative w-16 h-16 space-x-2 rounded-full'>
									{posts[0].author && <Img
										fill={true}
										style={{ objectFit: 'contain' }}
										className=''
										src={
											urlForImage(
												posts[0].author.image
											).url()!
										}
										alt={posts[0].author.name}
										sizes='(max-width: 768px) 15vw,
              					(max-width: 1200px) 15vw,
              					15vw'
									/>}
								</div>
								{posts[0].author && <p className='mb-2 text-sm font-light'>
									Blog post by{' '}
									<span className='text-pa-green-4'>
										{posts[0].author.name}
									</span>{' '}
									<br />
									published at{' '}
									{new Date(
										posts[0].publishedAt
									).toLocaleString()}
								</p>}
							</div>
							<div>
								<p>{posts[0].excerpt}</p>
							</div>
							<p className='mt-2 underline text-pa-blue-4 underline-offset-2'>
								Read full story
							</p>
						</Link>
					</div>
					<BlogFeaturedPosts posts={posts} />
				</div>

				<h2 className='pt-10 text-2xl text-center text-white text-bold bg-pa-blue-4 sm:text-4xl'>
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
