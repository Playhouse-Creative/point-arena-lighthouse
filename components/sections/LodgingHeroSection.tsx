import Img from 'next/image'

import { useNextSanityImage } from 'next-sanity-image'
import { sanityClient } from '@/lib/sanity-server'

type Props = {
	gridImages: { asset: { _id: string; url: string } }[]
	heroImage: { asset: { _id: string; url: string } }
	listItems: string[]
	heading: string
}

const GridImage = (props: any) => {
	const imageProps: any = useNextSanityImage(sanityClient, props.image)

	return (
		<div className='relative col-span-1 row-span-1 aspect-square '>
			{props.image && (
				<Img
					alt={props.image.alt}
					src={imageProps.src}
					loader={imageProps.loader}
					fill={true}
					priority={true}
					quality={80}
					style={{ objectFit: 'cover' }}
					sizes="(max-width: 768px) 25vw,
              (max-width: 1200px) 50vw,
              33vw"
				/>
			)}
		</div>
	)
}

export default function LodgingHeroSection(props: Props) {
	const heroImageProps: any = useNextSanityImage(
		sanityClient,
		props.heroImage
	)

	return (
		<div className='mb-4 w-screen px-4 md:mb-24'>
			<div className='mx-auto grid w-screen max-w-[1600px] grid-cols-4 grid-rows-4 gap-4 pt-4 md:grid-cols-4 md:grid-rows-2 lg:w-3/4 '>
				<div className='relative col-span-4 row-span-3 aspect-square md:col-span-2 md:row-span-2'>
					{props.heroImage && (
						<>
							<Img
							alt={props.heading}
							src={heroImageProps.src}
							loader={heroImageProps.loader}
							fill={true}
							priority={true}
							quality={75}
							style={{ objectFit: 'cover' }}
							sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
							
						/>
							
							
						</>
					)}
					<div
						className='absolute left-0 bottom-10 z-20 w-10/12 py-[5px] pl-8 sm:w-8/12'
						style={{
							backgroundColor: '#0088A7',
							clipPath:
								'polygon(100% 0%, 96% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)',
						}}>
						{' '}
						<h2 className='font-serif text-2xl font-semibold text-white'>
							{props.heading}
						</h2>
					</div>
				</div>
				{props.gridImages &&
					props.gridImages.map((image: any, i: number) => {
						return <GridImage key={i} image={image}></GridImage>
					})}
			</div>
		</div>
	)
}
