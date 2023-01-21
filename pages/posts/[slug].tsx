import { GetStaticProps } from 'next'
import React from 'react'
import PortableText from 'react-portable-text'
import { Post } from '../../lib/types'
import Img from 'next/image'
import { sanityClient } from '../../lib/sanity-server'
import { useNextSanityImage } from 'next-sanity-image'
import PageLayout from '@/components/PageLayout'

// import { Post } from '../../typings';

// import {useForm, SubmitHandler} from 'react-hook-form'
import { urlForImage } from '../../lib/sanity'

// interface iForm {
//     _id: string;
//     name: string;
//     email: string;
//     comment: string;
// }

interface Props {
	post: Post
}
const Post = ({ post }: Props) => {
	// const {register, handleSubmit, formState:{errors}} = useForm<iForm>()
	// const [submitted, setsubmitted] = useState(false)
	// // console.log(post)

	// const onSubmit: SubmitHandler<iForm> = (data) => {
	//     // console.log(data)
	//      fetch('/api/createComment', {
	//         method: 'POST',
	//         body: JSON.stringify(data)
	//     }).then(()=> {
	//         console.log(data);
	//         setsubmitted(true)
	//     }).catch((err) => {
	//         console.log(err);
	//         setsubmitted(false)
	//     })
	// }
	const imageProps: any = useNextSanityImage(sanityClient, post.mainImage)

	return (
		<PageLayout
			title='Point Arena Lighthouse'
			description='Come stay at the Point Arena Lighthouse!'>
			<main>
				<div className='relative z-0 mx-auto w-full h-[50vh] md:h-[60vh]'>
					{post.mainImage && (
						<Img
							alt={post.title}
							src={imageProps.src}
							loader={imageProps.loader}
							fill={true}
							priority={true}
							quality={80}
							style={{ objectFit: 'cover' }}
						/>
					)}
				</div>
				{/* <Img className='w-full h-40 object-cover' src={urlForImage(post.mainImage).url()!} alt='' /> */}

				<article className='mx-auto max-w-3xl p-5'>
					<h1 className='mt-10 mb-1 text-3xl'>{post.title}</h1>
					
                    {post.categories && post.categories.map((category, i: number) => (<p className='text-md text-pa-teal-4' key={i}>{category.title}</p>))}
					<div className='flex flex-col items-start mt-4 space-x-2 '>
						<div className='relative h-16 w-16 space-x-2 rounded-full'>
							<Img
								fill={true}
								style={{ objectFit: 'contain' }}
								className=''
								src={urlForImage(post.author.image).url()!}
								alt={post.author.name}
							/>
						</div>
						<p className='text-sm font-light'>
							Blog post by{' '}
							<span className='text-pa-green-4'>
								{post.author.name}
							</span>{' '}<br/>
							published at{' '}
							{new Date(post.publishedAt).toLocaleString()}
						</p>
					</div>
					<div className='my-10'>
						<PortableText
							dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
							projectId={
								process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
							}
							content={post.body}
							serializers={{
								h1: (props: any) => (
									<h1
										className='my-5 text-2xl font-bold'
										{...props}
									/>
								),
								h2: (props: any) => (
									<h2
										className='my-5 text-xl font-bold'
										{...props}
									/>
								),
								li: ({ children }: any) => (
									<li className='ml-4 list-disc'>
										{children}
									</li>
								),
								link: ({ href, children }: any) => (
									<a
										href={href}
										className='text-pa-blue-3 hover:underline'>
										{children}
									</a>
								),
							}}
						/>
					</div>
				</article>
			</main>
		</PageLayout>
	)
}
export async function getStaticPaths() {
	const query = `*[_type == 'post']{
        _id,
        slug  {
        current
      }
      }`
	const posts = await sanityClient.fetch(query)

	const paths = posts.map((post: Post) => ({
		params: {
			slug: post.slug.current,
		},
	}))
	return {
		paths,
		fallback: 'blocking', // false or 'blocking'
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const query = `
    *[_type == 'post' && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        slug,
        author->{name, image},
      publishedAt,
      excerpt,
      categories[]-> { title },
      mainImage,
      description,
      body, 
      
      }
    `
	const post = await sanityClient.fetch(query, {
		slug: params?.slug,
	})
	if (!post) {
		return {
			notFound: true,
		}
	}
	return {
		props: {
			post,
		},
		revalidate: 60,
	}
}

export default Post
