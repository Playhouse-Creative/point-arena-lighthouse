import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'

type Props = {
	images: any
  title: string
}

export default function RoomCarousel(props: Props) {
	return (
		<Carousel
			autoPlay
			showStatus={false}
			infiniteLoop
			showIndicators={false}
			showThumbs={false}>
			{props.images.map((image: any) => (
				<div key={image._key} className='relative aspect-square w-full'>					
					<Image
						src={urlForImage(image).url()}
						alt='placeholder'
						fill={true}
						style={{ objectFit: 'cover' }}
					/>
				</div>
			))}
		</Carousel>
	)
}
