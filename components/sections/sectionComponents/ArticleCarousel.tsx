import Img from 'next/image'
import { urlForImage } from '@/lib/sanity'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
	images: any
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
// export default function ArticleCarousel(props: Props) {
// 	const [currentIndex, setCurrentIndex] = useState(0)
//     const [currentSlides, setCurrentSlides] = useState([])

// 	const handleNextSlide = () => {
// 		let newIndex;
// 		newIndex = currentIndex + 1
// 		if(newIndex + 4 > props.images.length) {
// 			newIndex = 0
// 		}
// 		setCurrentIndex(newIndex)
// 	}

// 	const handlePrevSlide = () => {
// 		let newIndex;
// 		newIndex = currentIndex - 1
// 		if(newIndex < 0) { newIndex = props.images.length - 4 }
// 		setCurrentIndex(newIndex)}

// 	const swipeHandlers = useSwipeable({
// 		onSwipedLeft: handleNextSlide,
// 		onSwipedRight: handlePrevSlide,
// 		trackMouse: true,
// 		trackTouch: true,
// 		delta: 10,
// 	})

// 	useEffect (() => {

// 		setCurrentSlides(props.images.slice(currentIndex, currentIndex + 4))}, [currentIndex, props.images])

// 	return (
// 		<div className='w-full relative mx-auto'>
// 			<svg
// 				onClick={handlePrevSlide}
// 				xmlns='http://www.w3.org/2000/svg'
// 				fill='none'
// 				viewBox='0 0 24 24'
// 				strokeWidth={2.5}
// 				stroke='currentColor'
// 				className='absolute inset-y-1/2 left-0 z-20 m-auto h-14 w-14 cursor-pointer text-white '>
// 				<path
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 					d='M15.75 19.5L8.25 12l7.5-7.5'
// 				/>
// 			</svg>

// 			<div {...swipeHandlers} className='flex h-[full] sm:h-[25vh] gap-4 items-center justify-between overflow-hidden'>
// 					{currentSlides && currentSlides.map((image: any, i: number) => {

// 							return (
// 								<Transition
//                                 key={i}
//                                 show={true}
//                                 enter='transition-opacity duration-500'
//                                 enterFrom='opacity-0'
//                                 enterTo='opacity-100'
//                                 leave='transition-opacity duration-500'
//                                 leaveFrom='opacity-100'
//                                 leaveTo='opacity-0'
//                                 className='relative z-10 aspect-square h-[300px] sm:w-full w-screen'>
// 									<Image
// 										alt=''
// 										src={urlForImage(image).url()}
// 										fill={true}
// 										object-fit='cover'
// 									/>
// 								</Transition>
// 							)

// 					})}

// 			</div>
// 			<svg
// 				onClick={handleNextSlide}
// 				xmlns='http://www.w3.org/2000/svg'
// 				fill='none'
// 				viewBox='0 0 24 24'
// 				strokeWidth={2.5}
// 				stroke='currentColor'
// 				className='absolute inset-y-1/2 right-0 z-20 m-auto h-14 w-14 cursor-pointer text-white '>
// 				<path
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 					d='M8.25 4.5l7.5 7.5-7.5 7.5'
// 				/>
// 			</svg>

// 			<div className='absolute bottom-1 right-1 left-1 z-30 flex justify-center p-2'>
// 				{props.images && props.images.map((_: any, index: number) => {
// 					return (
// 						<div
// 							className={
// 								index === currentIndex
// 									? 'mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-gray-700 transition duration-300 ease-in-out'
// 									: 'mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-gray-300 transition duration-300 ease-in-out '
// 							}
// 							key={index}
// 							onClick={() => {
// 								setCurrentIndex(index)
// 							}}
// 						/>
// 					)
// 				})}
// 			</div>
// 		</div>
// 	)
// }
