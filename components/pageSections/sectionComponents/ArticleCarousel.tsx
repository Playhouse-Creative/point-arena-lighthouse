import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Img from 'next/image'
import React from 'react'
import Slider from 'react-slick'

import { urlForImage } from '../../../lib/sanity.image'

type Image = {
	_key?: string
	_type?: string
	alt?: string
	asset?: {
		_id?: string
		url?: string
	}
}

type Props = {
	images?: Image[]
}

function PrevArrow(props: any) {
	const { onClick } = props
	return (
		<svg
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={2.5}
			stroke='currentColor'
			className='absolute z-20 w-8 h-8 m-auto text-gray-300 cursor-pointer inset-y-1/2 left-2 sm:h-14 sm:w-14 '
		>
			<path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
		</svg>
	)
}

function NextArrow(props: any) {
	const { onClick } = props
	return (
		<svg
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={2.5}
			stroke='currentColor'
			className='absolute z-20 w-8 h-8 m-auto text-gray-300 cursor-pointer inset-y-1/2 right-2 sm:h-14 sm:w-14 '
		>
			<path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
		</svg>
	)
}

const ArticleCarousel = ({ images = [] }: Props) => {
	const settings = {
		dots: true,
		infinite: true,
		className: 'center',
		slidesToShow: 1,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					centerMode: true,
					slidesToShow: 1,
				},
			},
		],
	}

	return (
		<Slider {...settings}>
			{images.map((image = {} as Image, index: number) => (
				<div
					key={index}
					className='relative z-10 h-[400px] w-screen bg-slate-800 sm:w-[500px] xl:h-[600px]'
				>
					<Img
						alt={`Slide for ${image.alt || 'Place holder alt'}`}
						src={urlForImage(image as any)?.url() || ''}
						fill={true}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						style={{ objectFit: 'contain', padding: '8px' }}
					/>
					<p className='absolute bottom-0 left-0 right-0 p-1 mx-2 mb-1 text-xs bg-pa-blue-1/80 md:mx-48'>
						{image.alt || 'Place holder alt'}
					</p>
				</div>
			))}
		</Slider>
	)
}

export default ArticleCarousel
