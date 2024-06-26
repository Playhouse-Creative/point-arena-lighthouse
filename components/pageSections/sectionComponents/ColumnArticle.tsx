import ImageWithLink from 'components/shared/ImageWithLink'
import Image from 'next/image'
import React from 'react'
import PortableText from 'react-portable-text'

import serializers from '../../../lib/portableText-serializers'
import { urlForImage } from '../../../lib/sanity.image'

type ImageProps = {
	alt?: string
	linkUrl?: { route?: string; link?: string; anchorLink?: { slug?: { current?: string } } }
	asset?: {
		_id: string
		url: string
	}
}

type Props = {
	title?: string
	heading?: string
	images?: ImageProps[]
	body?: any
	linkId?: { slug?: { current?: string } }
}

export default function ColumnArticle({ title, heading, images, body, linkId }: Props) {
	// const id =  linkId?.slug?.current?.split('#')[1] 
	const displayTitle = title || `Placeholder title`
	const displayHeading: string | undefined = heading || undefined;

	return (
		<div
			// id={id}
			className='relative mx-4 my-12 max-w-[1600px] scroll-mt-96 border border-pa-navy-4 bg-white px-4 shadow-lg lg:px-16 2xl:mx-auto'
		>
			<h3 className='mx-2 mt-8 font-serif text-4xl font-semibold text-center text-pa-navy-4 sm:ml-6'>
				{displayTitle}
			</h3>
			<div
				className={`my-12 flex w-full flex-col justify-center ${
					images && images[0] && 'items-start sm:flex-row'
				} `}
			>
				<div className='grid gap-4 mx-auto sm:grid-cols-1 lg:gap-2'>
					{images && images.length > 0 ? (
						images.map((image: ImageProps = {}, i: number) => (
							<div
								key={i}
								className='relative col-span-1 h-full min-h-[300px] w-[80vw] max-w-[700px] overflow-hidden sm:min-h-[500px] sm:w-[40vw] lg:w-[35vw]'
							>
								{image.linkUrl ? (
									<ImageWithLink
										image={image}
										alt={image.alt || 'Placeholder alt'}
										fill={true}
										style={{ objectFit: 'contain' }}
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										linkUrl={image.linkUrl}
									/>
								) :
									(<Image
										src={urlForImage(image as any)?.url() || 'placeholder-image-url'}
										alt={image.alt || 'Placeholder alt'}
										fill={true}
										style={{ objectFit: 'contain' }}
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									/>)
								}
							</div>
						))
					) : (
						<div style={{ backgroundColor: 'grey', height: 'auto', width: '100%' }}></div>
					)}
				</div>
				<div
					className={`${
						images && images[0] ? 'text-left sm:w-1/2' : 'text-center'
					} mx-auto px-4 text-pa-navy-4 sm:pl-8 `}
				>
					<h3 className='mt-4 mb-8 font-serif text-3xl font-semibold text-pa-red-4'>{displayHeading}</h3>
					{body ? (
						<PortableText
							content={body}
							serializers={serializers()}
						/>
					) : (
						<p>Placeholder body</p>
					)}
				</div>
			</div>
		</div>
	)
}

