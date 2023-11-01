import Img from 'next/image'
import React from 'react'
import PortableText from 'react-portable-text'

import serializers from '../../../lib/portableText-serializers'
import { urlForImage } from '../../../lib/sanity.image'
import { CTA } from '../../../types'
import Cta from './Cta'

type Props = {
	bannerColor?: string
	title?: string
	body?: any
	cta?: CTA
	image?: {
		asset?: {
			_id?: string
			url?: string
		}
	}
}

export default function CtaRow({bannerColor, title, body, cta, image}: Props) {
	const displayTitle = title ? title : `Placeholder title`
	const bannerBackground = bannerColor ? bannerColor : `#000000`
	const imageURL = image && image.asset ? urlForImage(image as Props)?.url() : "/logoRibbon.png"

	return (
		<div className='mx-4 my-20'>
			<div className='relative flex justify-center mx-auto'>
				<div className='flex w-full max-w-[1400px] flex-col border-2 border-pa-navy-1 bg-white pb-4 lg:p-10 sm:p-4 md:flex-row'>
					<div className='relative w-full md:w-1/2 aspect-square md:max-h-[700px]'>
						<div
							className='absolute -bottom-4 right-0 z-20 flex w-[85vw] items-center justify-center py-[5px] md:bottom-4 lg:bottom-20 md:right-0 md:h-14 md:w-11/12 lg:w-3/4'
							style={{
								backgroundColor: bannerBackground,
								clipPath:
									'polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, calc(0% + 10px) 50%, 0% 0%)',
							}}>
							<h2 className='font-serif text-xl text-center text-white lg:text-2xl '>
								{displayTitle}
							</h2>
						</div>
						<Img
							src={imageURL || ''}
							alt='Call to Action Image'
							fill={true}
							style={{ objectFit: 'cover' }}
							sizes='(max-width: 768px) 100vw,
              					(max-width: 1200px) 50vw,
              					50vw'
						/>
					</div>
					<div className='flex flex-col items-center justify-center mx-2 mt-8 text-base md:mx-12 md:mt-4 lg:text-lg md:justify-start lg:my-auto md:w-1/2'>
						{body && <PortableText content={body} serializers={serializers()} />}
						{cta && <Cta
							{...cta}
							buttonActionClass='w-auto self-start rounded-lg bg-pa-blue-4 hover:bg-pa-blue-3 px-6 py-3 mt-4 text-center font-serif font-medium tracking-wider text-xl text-white shadow-xl'
						/>}
					</div>
				</div>
			</div>
		</div>
	)
}
