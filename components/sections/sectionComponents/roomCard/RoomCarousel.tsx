import { Fragment, useState, useEffect, useCallback } from 'react'
import { useSwipeable } from 'react-swipeable'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'
import { Dialog, Transition } from '@headlessui/react'

type Props = {
	children: any
	images: any
	title: string
}

export default function RoomCarousel(props: Props) {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [lightBoxOpen, setLightBoxOpen] = useState(false)

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
		<div>
			<Transition.Root show={lightBoxOpen} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-50'
					onClose={setLightBoxOpen!}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity' />
					</Transition.Child>

					<div className='fixed inset-0 z-10 overflow-y-auto'>
						<div className='flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
								enterTo='opacity-100 translate-y-0 sm:scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 translate-y-0 sm:scale-100'
								leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
								<Dialog.Panel className='relative w-full transform overflow-hidden p-12 transition-all sm:my-8 sm:max-w-4xl'>
									<div className='relative m-auto flex h-full w-full overflow-hidden'>
										<div
											{...swipeHandlers}
											className='relative z-10 aspect-square w-full'>
											{props.images.map(
												(image: any, i: number) => {
													return (
														<Transition
															key={i}
															show={
																i ===
																currentSlide
																	? true
																	: false
															}
															enter='transition-opacity duration-500'
															enterFrom='opacity-0'
															enterTo='opacity-100'
															leave='transition-opacity duration-500'
															leaveFrom='opacity-100'
															leaveTo='opacity-0'>
															<Image
																alt=''
																src={urlForImage(
																	image
																).url()}
																fill={true}
																object-fit='cover'
																onClick={() =>
																	setLightBoxOpen(
																		true
																	)
																}
																className='cursor-pointer'
															/>
														</Transition>
													)
												}
											)}
										</div>
									</div>
									<div className='flex justify-center h-48 items-center  mt-4'>
										{props.images.map(
											(image: any, i: number) => {
												return (
													<div
														key={i}
														className={`relative z-10 trasition duration-500 ease-in-out  ${i ===
															currentSlide
																? 'w-48 aspect-square'
																: 'w-36 aspect-square'} m-2`}>
														
															<Image
																alt=''
																src={urlForImage(
																	image
																).url()}
																fill={true}
																object-fit='cover'
																onClick={() => { setCurrentSlide(i) }}
																className='cursor-pointer'
															/>
													
													</div>
												)
											}
										)}
									</div>
									<div className='mt-5 sm:mt-6'>
										<button
											type='button'
											className='absolute top-3 right-3 border border-transparent text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pa-red-3 focus:ring-offset-2 sm:text-sm'
											onClick={() =>
												setLightBoxOpen(false)
											}>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke-width='1.5'
												stroke='currentColor'
												className='h-8 w-8'>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
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
										onClick={() => setLightBoxOpen(true)}
										className='cursor-pointer'
									/>
								</Transition>
							)
						})}
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

				<div className='absolute bottom-6 right-1 left-1 z-10 flex justify-center p-2'>
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
		</div>
	)
}
