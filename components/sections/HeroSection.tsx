import Img from 'next/image'
import Cta from './sectionComponents/Cta'
import { useNextSanityImage } from 'next-sanity-image'
import { sanityClient } from '@/lib/sanity-server'
import { CTA } from '../../lib/types'

interface HeroImage {
	image?: any
}

interface Props {
	heading?: string
	subheading?: string
	cta?: CTA[]
	heroImage?: HeroImage
}

const HeroSection = ({
	heading = 'Placeholder heading',
	subheading = '',
	cta = [],
	heroImage = { image: '' },
}: Props) => {
	const imageProps = useNextSanityImage(sanityClient, heroImage.image)
	const imageSrc = (imageProps as any)?.src || ''
	const imageLoader = (imageProps as any)?.loader || (() => {})

	return (
		<>
			<div>
				<div className='relative z-0 mx-auto h-[50vh] md:h-[60vh] lg:h-[70vh] 2xl:h-[75vh]'>
					{heroImage.image && (
						<Img
							alt={heading}
							src={imageSrc}
							loader={imageLoader}
							fill={true}
							sizes='(max-width: 768px) 100vw,
                                (max-width: 1200px) 100vw,
                                100vw'
							priority={true}
							quality={80}
							style={{ objectFit: 'cover', transformOrigin: 'top' }}
						/>
					)}
					<div className='absolute z-10 flex h-[50vh] w-screen flex-col bg-black/40 md:h-[60vh] lg:h-[70vh] 2xl:h-[75vh]'>
						<div className='z-20 mx-auto flex w-[90vw] flex-col pt-[15vh] sm:ml-[3vw] sm:w-8/12 md:pt-[25vh] md:text-right lg:w-1/2 xl:w-6/12 '>
							<h2 className='mt-4 font-serif text-[2rem] font-semibold uppercase leading-tight text-white sm:text-[3rem] lg:text-[3rem] 2xl:text-[4rem]'>
								{heading}
							</h2>
							<h3 className='text-xl text-white text-md md:text-xl'>{subheading}</h3>
							<div className='flex flex-row space-x-4 text-lg sm:w-full sm:justify-end'>
								{cta &&
									cta.map((ctaItem, i) => (
										<Cta
											key={i}
											{...ctaItem}
											buttonActionClass='inline-flex items-center text-center justify-center mt-4  border border-transparent self-end rounded-lg bg-pa-red-4 hover:bg-pa-red-3 px-4 xl:px-8 py-2 xl:py-4 font-serif font-medium tracking-wider text-lg xl:text-2xl text-white shadow-xl'
										/>
									))}
							</div>
						</div>

						<div className='w-full py-6 text-center md:w-3/5'></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HeroSection
