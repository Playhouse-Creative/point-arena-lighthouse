import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'
import PortableText from 'react-portable-text'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
	articleType: any
	title: string
	
}

export default function CarouselArticleSection(props: Props) {
	
	const article = props.articleType.carouselArticle
	return (
		<div className='relative mx-auto mb-12 max-w-[1600px] border border-pa-navy-4 bg-white px-16 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
			<h3
				className='mt-8 mb-12
        ml-6 text-center font-serif text-4xl font-semibold text-pa-navy-4'>
				{props.title}
			</h3>
			
				
					<Carousel showThumbs={false} showStatus={false} centerMode={true} centerSlidePercentage={20} infiniteLoop swipeable={true} emulateTouch={true}>
					{article.images.map((image: any, i: number) => <div key={i} className='relative h-48 w-48 p-2]'>
						<Image
							src={urlForImage(image).url()}
							alt={image.alt}
							fill={true}
							style={{ objectFit: 'cover' }}
						/>
					</div>)}</Carousel>
				
				<div className='w-full columns-2 py-8 text-left text-pa-navy-4'><h3 className='text-3xl font-semibold font-serif mb-4'>{article.title}</h3><PortableText
									content={article.body}
									
								/></div>
		

			
		</div>
	)
}