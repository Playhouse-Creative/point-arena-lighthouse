import Img from 'next/image'
import { urlForImage } from '@/lib/sanity'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
	images:   {
			_key: string
			_type: string
			alt: string
			asset: {
				_id: string
				url: string
			}
	}[]
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
			className='absolute inset-y-1/2 left-2 z-20 m-auto h-8 w-8 cursor-pointer text-gray-300 sm:h-14 sm:w-14 '>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M15.75 19.5L8.25 12l7.5-7.5'
			/>
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
			className='absolute inset-y-1/2 right-2 z-20 m-auto h-8 w-8 cursor-pointer text-gray-300 sm:h-14 sm:w-14 '>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M8.25 4.5l7.5 7.5-7.5 7.5'
			/>
		</svg>
	)
}

const ArticleCarousel = (props: Props) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<div className='w-full'>
			<Slider {...settings}>
				{props.images.map((image: any, index: number) => (
					<div
						key={index}
						className='relative z-10 aspect-square h-[300px] w-full'>
						<Img
							alt={`Slide ${index}`}
							src={urlForImage(image).url()}
							fill={true}
							style={{ objectFit: 'cover' }}
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default ArticleCarousel
