import React from 'react'
import Image from 'next/image'
import Cta from './Cta'
import { urlForImage } from '@/lib/sanity'
import PortableText from 'react-portable-text'

type Props = {
	bannerColor: string
	title: string
	body: any[]
	cta: any[]
	image: string
}

export default function CtaRow(props: Props) {
	return (
		<div className='my-20 mx-4  '>
			<div className='relative mx-auto flex justify-center'>
				<div className='flex w-full max-w-[1400px] flex-col border-2 border-pa-navy-1 bg-white pb-10 md:flex-row md:pb-0'>
					<div className='relative aspect-square w-full md:w-1/2'>
						<div
							className='absolute -bottom-4 right-0 z-20 flex w-[80vw] items-center justify-center py-[5px] md:bottom-4 lg:bottom-20 md:right-0 md:h-14 md:w-11/12 lg:w-3/4'
							style={{
								backgroundColor: props.bannerColor,
								clipPath:
									'polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, calc(0% + 10px) 50%, 0% 0%)',
							}}>
							<h2 className='font-serif text-xl lg:text-2xl font-semibold text-white xl:text-3xl'>
								{props.title}
							</h2>
						</div>
						<Image
							src={urlForImage(props.image).url()}
							alt='placeholder'
							fill={true}
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<div className='mx-12 mt-8 md:mt-4 lg:text-xl text-base flex flex-col items-center justify-center md:justify-start lg:mt-24 md:w-1/2'>
						{props.body && <PortableText content={props.body} />}
						<Cta
							{...props.cta}
							buttonActionClass='w-auto self-start rounded-lg bg-pa-blue-4 hover:bg-pa-blue-3 px-6 py-3 mt-4 font-serif font-medium tracking-wider text-xl text-white shadow-xl'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
