import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'
import PortableText from 'react-portable-text'

type Props = {
	articleType: any
	title: string
}

export default function SideGalleryArticleSection(props: Props) {
	const article = props.articleType.sideGalleryArticle
	return (
		<div className='relative mx-4 my-12 max-w-[1600px] border border-pa-navy-4 bg-white px-4 shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4 sm:px-16 2xl:mx-auto'>
			<h3
				className='mx-2
        mt-8 text-center font-serif text-4xl font-semibold text-pa-navy-4 sm:ml-6'>
				{props.title}
			</h3>
			<div className='mb-6 mt-12 flex w-full flex-col justify-around sm:flex-row'>
				<div className=' grid grid-cols-2 gap-4 sm:grid-cols-1'>
					{article.images &&
						article.images.map((image: any, i: number) => (
							<div
								key={i}
								className='relative col-span-1 aspect-square w-full bg-black sm:w-[30vw]'>
								<Image
									src={urlForImage(image).url()}
									alt={image.alt}
									fill={true}
									style={{ objectFit: 'cover' }}
								/>
							</div>
						))}
				</div>
				<div className='text-left text-pa-navy-4 sm:ml-8 sm:w-1/2'>
					<h3 className='my-4 font-serif text-3xl font-semibold'>
						{article.title}
					</h3>
					<PortableText
						content={article.body}
						serializers={{
							link: ({ href, children }: any) => (
								<a
									className='text-pa-teal-4 underline'
									href={href}>
									{children}
								</a>
							),
						}}
					/>
				</div>
			</div>
		</div>
	)
}
