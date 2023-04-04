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
	linkId: {linkId: {current: string}}
}

export default function ColumnArticle(props: Props) {

	return (
		<div id={`${props.linkId ? props.linkId.linkId.current : null}`} className='scroll-mt-96 relative mx-4 my-12 max-w-[1600px] border border-pa-navy-4 bg-white px-4 shadow-lg  lg:px-16 2xl:mx-auto'>
			<h3
				className='mx-2
        mt-8 text-center font-serif text-4xl font-semibold text-pa-navy-4 sm:ml-6'>
				{props.title}
			</h3>
			<div className={`my-12 flex w-full flex-col justify-center ${props.images && 'sm:flex-row items-start'} `}>
				<div className='grid gap-4 lg:gap-2 sm:grid-cols-1 mx-auto'>
					{ props.images &&
						props.images.map((image: any, i: number) => (
							<div
								key={i}
								className='relative col-span-1 h-full w-[80vw] sm:w-[40vw] lg:w-[35vw] min-h-[300px] sm:min-h-[400px] overflow-hidden'>
								<Image
									src={urlForImage(image).url()}
									alt={image.alt}
									fill={true}
									style={{ objectFit: 'contain' }}
									sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
								/>
							</div>
						))}
				</div>
				<div className={`${props.images ? 'text-left sm:w-1/2': 'text-center'} text-pa-navy-4 px-4 mx-auto sm:pl-8 `}>
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
