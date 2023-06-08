import { Fragment, useState, useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'
import Img from 'next/image'
import { urlForImage } from '@/lib/sanity'
import { Dialog, Transition } from '@headlessui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
	children: any
	images: {
		_key: string
		_type: string
		alt: string
		asset: {
			_id: string
			url: string
		}
	}[]
	title: string
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
			className='absolute z-20 w-8 h-8 m-auto cursor-pointer inset-y-1/2 left-2 text-pa-teal-4 sm:h-14 sm:w-14 '>
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
			className='absolute z-20 w-8 h-8 m-auto cursor-pointer inset-y-1/2 right-2 text-pa-teal-4 sm:h-14 sm:w-14 '>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M8.25 4.5l7.5 7.5-7.5 7.5'
			/>
		</svg>
	)
}

export default function RoomCarousel(props: Props) {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [lightBoxOpen, setLightBoxOpen] = useState(false)

	const settings = {
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		pauseOnHover: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	}

	const modalSettings = {
		
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: "slick-dots slick-thumb",
		pauseOnHover: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	}
	return (
		<div className='z-30'>
			<div className='w-full aspect-square'>
				<Slider {...settings}>
					{props.images &&
						props.images.map((image: any, i: number) => {
							return (
								<div
									key={i}
									className='relative w-full h-full aspect-square'
								>
									<Img
										alt={`Slide ${i}`}
										src={urlForImage(image).url()}
										fill={true}
										style={{ objectFit: 'cover' }}
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										onClick={() => setLightBoxOpen(true)}
										className='cursor-pointer'
									/>
								</div>
							)
						})}
				</Slider>
			</div>
			<Transition.Root
				show={lightBoxOpen}
				as={Fragment}
			>
				<Dialog
					as='div'
					className='relative z-50 hidden md:block'
					onClose={setLightBoxOpen!}
				>
					<div className='fixed inset-0 z-10 overflow-y-auto '>
						<div className='flex items-end justify-center h-screen text-center bg-gray-500/50 sm:items-center sm:p-0'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
								enterTo='opacity-100 translate-y-0 sm:scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 translate-y-0 sm:scale-100'
								leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							>
								<Dialog.Panel className='relative w-full p-12 overflow-hidden transition-all transform sm:my-8 sm:max-w-3xl'>
									<div className='relative flex w-full h-full m-auto overflow-hidden'>
										<div className='relative z-10 w-full aspect-square'>
											<Slider {...modalSettings}>
												{props.images && props.images.map((image: any, i: number) => {
													return (
														<div
															key={i}
															className={`trasition relative z-50  m-2 aspect-square w-full`}
														>
															<Img
																alt=''
																src={urlForImage(image).url()}
																fill={true}
																style={{
																	objectFit: 'cover',
																}}
																sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
																onClick={() => setLightBoxOpen(true)}
																className='cursor-pointer'
															/>
														</div>
													)
												})}
											</Slider>
										</div>
									</div>
									<div className='mt-5 sm:mt-6'>
										<button
											type='button'
											className='absolute text-base font-medium text-white border border-transparent shadow-sm top-3 right-3 focus:outline-none focus:ring-2 focus:ring-pa-red-3 focus:ring-offset-2 sm:text-sm'
											onClick={() => setLightBoxOpen(false)}
										>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												className='w-8 h-8'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
												/>
											</svg>
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	)
}
