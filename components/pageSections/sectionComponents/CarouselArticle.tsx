

import React from 'react'
import PortableText from 'react-portable-text'

import serializers from '../../../lib/portableText-serializers'
import ArticleCarousel from './ArticleCarousel'

type Props = {
	images?: any[]
	title?: string
	heading?: string
	linkId?: {slug?: {current?: string}}
	body?: any
}

export default function CarouselArticle({images, title, heading, linkId, body}: Props) {
	const id = linkId && linkId.slug && linkId.slug.current ? linkId.slug.current.split('#')[1] : undefined
	const displayTitle = title ? title : `Placeholder title`
	const displayHeading = heading ? heading : null

	return (
		<div
			id={id}
			className='relative my-12 mx-4 mb-12 max-w-[1600px] scroll-mt-96 border border-pa-navy-4 bg-white px-4 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4 sm:px-16 2xl:mx-auto'
		>
			<h3 className='mt-8 mb-12 ml-6 font-serif text-4xl font-semibold text-center text-pa-navy-4'>
				{displayTitle}
			</h3>
			{images && images.length > 0 ? <ArticleCarousel images={images} /> : null}
			<h3 className='mb-4 font-serif text-3xl font-semibold'>{displayHeading}</h3>
			<div className='w-full py-8 text-left text-pa-navy-4 sm:columns-2'>
				{body && (
					<PortableText
						content={body}
						serializers={serializers()}
					/>
				)}
			</div>
		</div>
	)
}
