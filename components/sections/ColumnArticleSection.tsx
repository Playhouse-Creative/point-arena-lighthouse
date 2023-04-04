import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'
import PortableText from 'react-portable-text'
import serializers from '@/lib/portableText-serializers'

type Props = {
	columnArticle: any
	title: string
	linkId: {linkId: {current: string}}
}

export default function ColumnArticleSection(props: Props) {
	const article = props.columnArticle
	return (
		<div id={`${props.linkId ? props.linkId.linkId.current : null}`} className='scroll-mt-96 relative mx-4 my-12 max-w-[1600px] border border-pa-navy-4 bg-white px-4 shadow-lg  lg:px-16 2xl:mx-auto'>
			<h3
				className='mx-2
        mt-8 text-center font-serif text-4xl font-semibold text-pa-navy-4 sm:ml-6'>
				{props.title}
			</h3>
			<div className={`my-12 flex w-full flex-col justify-center ${article.images && 'sm:flex-row items-start'} `}>
				<div className='grid gap-4 lg:gap-2 sm:grid-cols-1'>
					{ article.images &&
						article.images.map((image: any, i: number) => (
							<div
								key={i}
								className='relative col-span-1 h-full w-full sm:w-[35vw] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden'>
								<Image
									src={urlForImage(image).url()}
									alt={image.alt}
									fill={true}
									style={{ objectFit: 'contain' }}
									
								/>
							</div>
						))}
				</div>
				<div className={`${article.images ? 'text-left': 'text-center'} text-pa-navy-4 sm:pl-8 sm:w-1/2`}>
					<h3 className='my-4 font-serif text-3xl font-semibold'>
						{article.title}
					</h3>
					<PortableText
						content={article.body}
						serializers={serializers()}
					/>
				</div>
			</div>
		</div>
	)
}
