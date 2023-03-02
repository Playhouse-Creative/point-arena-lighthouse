import React from 'react'
import PortableText from 'react-portable-text'
import ArticleCarousel from './ArticleCarousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

type Props = {
	images: any[]
	title: string
    heading: string
	id: {id: string}
    body: any
}

export default function CarouselArticle(props: Props) {

	return (
		<div id={`${props.id ? props.id.id : null}`} className='relative mx-4 mb-12 max-w-[1600px] border border-pa-navy-4 bg-white px-4 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4 sm:px-16 2xl:mx-auto'>
			<h3
				className='mt-8 mb-12
        ml-6 text-center font-serif text-4xl font-semibold text-pa-navy-4'>
				{props.title}
			</h3>
			{props.images && <ArticleCarousel images={props.images} />}
			<div className='w-full py-8 text-left text-pa-navy-4 sm:columns-2'>
				<h3 className='mb-4 font-serif text-3xl font-semibold'>
					{props.heading}
				</h3>
				<PortableText content={props.body} serializers={{
							link: ({ href, children }: any) => (
								<a
									className='text-pa-teal-4 underline'
									href={href}>
									{children}
								</a>
							),
						}}/>
			</div>
		</div>
	)
}
