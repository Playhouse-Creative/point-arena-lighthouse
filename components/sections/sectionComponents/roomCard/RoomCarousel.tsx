import { useState, useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'
import { Transition } from '@headlessui/react'

type Props = {
	children: any
	images: any
	title: string
}


export default function RoomCarousel(props: Props) {
	const [currentSlide, setCurrentSlide] = useState(0)
  

	const handleNextSlide = useCallback(() => {
		let newSlide =
			currentSlide === props.images.length - 1 ? 0 : currentSlide + 1
		setCurrentSlide(newSlide)
	}, [currentSlide, props.images.length])

	const handlePrevSlide = () => {
		let newSlide =
			currentSlide === 0 ? props.images.length - 1 : currentSlide - 1
		setCurrentSlide(newSlide)
	}

	const swipeHandlers = useSwipeable({
		onSwipedLeft: handleNextSlide,
		onSwipedRight: handlePrevSlide,
		trackMouse: true,
		trackTouch: true,
		delta: 10,
	})

	useEffect(() => {
		const interval = setInterval(() => {
			handleNextSlide()
		}, 3000)
		return () => clearInterval(interval)
	}, [handleNextSlide])

	return (
		<div className='relative'>
			<svg
				onClick={handlePrevSlide}
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={2.5}
				stroke='currentColor'
				className='absolute inset-y-1/2 left-0 z-20 m-auto h-14 w-14 cursor-pointer text-pa-navy-2'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M15.75 19.5L8.25 12l7.5-7.5'
				/>
			</svg>

			<div className='relative m-auto flex h-full w-full overflow-hidden'>
				<div
					{...swipeHandlers}
					className='relative z-10 aspect-square w-full'>
					{props.images.map((image: any, i: number) => {
						
							return (
								<Transition
									key={i}
									show={i === currentSlide ? true : false}
									enter='transition-opacity duration-500'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='transition-opacity duration-500'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'>
									<Image
										alt=''
										src={urlForImage(image).url()}
										fill={true}
										object-fit='cover'
									/>
								</Transition>
							)
						}
					)}
				</div>
			</div>
			<svg
				onClick={handleNextSlide}
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={2.5}
				stroke='currentColor'
				className='absolute inset-y-1/2 right-0 z-20 m-auto h-14 w-14 cursor-pointer text-pa-navy-2'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M8.25 4.5l7.5 7.5-7.5 7.5'
				/>
			</svg>

			<div className='absolute bottom-6 right-1 left-1 z-30 flex justify-center p-2'>
				{props.images.map((_: any, index: number) => {
					return (
						<div
							className={
								index === currentSlide
									? 'mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-gray-700 transition duration-300 ease-in-out'
									: 'mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-gray-300 transition duration-300 ease-in-out '
							}
							key={index}
							onClick={() => {
								setCurrentSlide(index)
							}}
						/>
					)
				})}
			</div>
		</div>
	)
}
