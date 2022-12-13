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
		<div className='my-20'>
			<div className='relative mx-auto flex justify-center'>
				<div
					className='absolute right-0 top-10 z-20 w-[60vw] py-[5px] pl-8'
					style={{ backgroundColor: props.bannerColor, clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, calc(0% + 25px) 50%, 0% 0%)' }}>
					{' '}
					<h2 className='font-serif text-2xl font-semibold text-white'>
						{props.title}
					</h2>
				</div>
				<div className='flex h-[512px] max-w-[1400px] w-full border-2 border-pa-navy-1 bg-white'>
					<div className='relative h-full w-1/2'>
						<Image
							src={urlForImage(props.image).url()}
							alt='placeholder'
							fill={true}
                            style={{objectFit: 'cover'}}
						/>
					</div>
					<div className='mx-12 my-24 flex w-1/2 flex-col justify-center items-start'>
						{props.body && <PortableText content={props.body} />}
						<Cta
							{...props.cta}
							buttonActionClass='w-auto self-end rounded-lg bg-pa-blue-4 px-6 py-3 mt-4 font-serif font-medium tracking-wider text-xl text-white shadow-xl'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
