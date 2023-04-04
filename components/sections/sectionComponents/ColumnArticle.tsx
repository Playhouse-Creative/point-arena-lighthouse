import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'
import PortableText from 'react-portable-text'
import serializers from '@/lib/portableText-serializers'

type Props = {
	title: string
	heading: string
	images: any
	body: any
	linkId: { slug: { current: string } }
}

export default function ColumnArticle(props: Props) {
	return (
		<div
			id={`${props.linkId ? props.linkId.slug.current : null}`}
			className='relative mx-4 my-12 max-w-[1600px] scroll-mt-96 border border-pa-navy-4 bg-white px-4 shadow-lg  lg:px-16 2xl:mx-auto'>
			<h3
				className='mx-2
        mt-8 text-center font-serif text-4xl font-semibold text-pa-navy-4 sm:ml-6'>
				{props.title}
			</h3>
			<div
				className={`my-12 flex w-full flex-col justify-center ${
					props.images[0] && 'items-start sm:flex-row'
				} `}>
				<div className='mx-auto grid gap-4 sm:grid-cols-1 lg:gap-2'>
					{props.images &&
						props.images.map((image: any, i: number) => (
							<div
								key={i}
								className='relative col-span-1 h-full min-h-[300px] w-[80vw] overflow-hidden sm:min-h-[500px] sm:w-[40vw] lg:w-[35vw]'>
								<Image
									src={urlForImage(image).url()}
									alt={image.alt}
									fill={true}
									style={{ objectFit: 'contain' }}
									sizes='(max-width: 768px) 100vw,
              								(max-width: 1200px) 50vw,
              													33vw'
								/>
							</div>
						))}
				</div>
				<div
					className={`${
						props.images ? 'text-left sm:w-1/2' : 'text-center'
					} mx-auto px-4 text-center text-pa-navy-4 sm:pl-8 `}>
					<h3 className='my-4 font-serif text-3xl font-semibold text-pa-red-4'>
						{props.heading}
					</h3>
					<PortableText
						content={props.body}
						serializers={serializers()}
					/>
				</div>
			</div>
		</div>
	)
}
