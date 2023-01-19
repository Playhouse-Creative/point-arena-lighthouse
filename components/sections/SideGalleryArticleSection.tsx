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
		<div className='relative mx-auto my-12 max-w-[1600px] border border-pa-navy-4 bg-white px-16 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
			<h3
				className='mt-8
        ml-6 text-center font-serif text-4xl font-semibold text-pa-navy-4'>
				{props.title}
			</h3>
			<div className='mb-6 mt-12 flex w-full justify-around'>
				<div className='grid-row-flow grid grid-cols-1 gap-6'>
					{article.images &&
						article.images.map((image: any, i: number) => (
							<div
								key={i}
								className='relative col-span-1 h-[500px] w-[500px] bg-black'>
								<Image
									src={urlForImage(image).url()}
									alt={image.alt}
									fill={true}
									style={{ objectFit: 'cover' }}
								/>
							</div>
						))}
				</div>
				<div className='ml-8 w-1/2 text-left text-pa-navy-4'>
					<h3 className='mb-4 font-serif text-3xl font-semibold'>
						{article.title}
					</h3>
					<PortableText content={article.body} serializers={{
        link: ({ href , children }: any) => <a className='text-pa-teal-4 underline' href={href}>{children}</a>
        
      }}/>
				</div>
			</div>
		</div>
	)
}
