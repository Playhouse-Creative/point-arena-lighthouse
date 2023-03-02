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
		className: "center",	
		slidesToShow: 1,
		centerMode: true,
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
				{props.images.map((image: any, index: number) => (
					<div
						key={index}
						className='relative z-10 h-[400px] xl:h-[600px] w-screen sm:w-[500px] bg-slate-800'>
						<Img
							alt={`Slide for ${image.alt}`}
							src={urlForImage(image).url()}
							fill={true}
							style={{ objectFit: 'contain', padding: '8px' }}
						/>
						<p className='absolute bottom-0 md:mx-48 mx-2 right-0 left-0 mb-1 bg-pa-blue-1/80 p-1 text-xs'>{image.alt}</p>
					</div>
				))}
			</Slider>
		
	)
}

export default ArticleCarousel
