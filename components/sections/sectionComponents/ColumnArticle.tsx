import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'
import PortableText from 'react-portable-text'

type Props = {
	title: string
    heading: string
    images: any
    body: any
	id: {id: string}
}

export default function ColumnArticle(props: Props) {

	return (
		<div id={`${props.id ? props.id.id : null}`} className='relative mx-4 my-12 max-w-[1600px] border border-pa-navy-4 bg-white px-4 shadow-lg  lg:px-16 2xl:mx-auto'>
			<h3
				className='mx-2
        mt-8 text-center font-serif text-4xl font-semibold text-pa-navy-4 sm:ml-6'>
				{props.title}
			</h3>
			<div className={`my-12 flex w-full flex-col justify-center ${props.images && 'sm:flex-row items-start'} `}>
				<div className='grid gap-4 lg:gap-2 sm:grid-cols-1'>
					{ props.images &&
						props.images.map((image: any, i: number) => (
							<div
								key={i}
								className='relative col-span-1 h-full w-full sm:w-[40vw] lg:w-[35vw] sm:min-h-[400px]  overflow-hidden'>
								<Image
									src={urlForImage(image).url()}
									alt={image.alt}
									fill={true}
									style={{ objectFit: 'contain' }}
									
								/>
							</div>
						))}
				</div>
				<div className={`${props.images ? 'text-left': 'text-center'} text-pa-navy-4 sm:pl-8 sm:w-1/2`}>
					<h3 className='my-4 font-serif text-3xl font-semibold'>
						{props.heading}
					</h3>
					<PortableText
						content={props.body}
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
