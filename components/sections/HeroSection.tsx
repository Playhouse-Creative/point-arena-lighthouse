import Image from 'next/image'
import PortableText from 'react-portable-text'
import { urlForImage } from '@/lib/sanity'
import Cta from './sectionComponents/Cta'

const HeroSection = (props: any) => {
	return (
		<div id={props.id}>
			<div className='relative mx-auto h-[50vh] md:h-[80vh] '>
				<Image
					alt={props.heading}
					src={urlForImage(props.heroImage.image).url()}
					fill={true}
					priority={true}
					quality={100}
					style={{ zIndex: 0, objectFit: 'cover' }}
				/>
				<div className='absolute z-20 flex h-[50vh] w-screen flex-col bg-black/25 md:h-[80vh] '>
					<div className='flex w-1/2 flex-col justify-end  md:pt-[35vh] md:text-left'>
						<h2 className='z-20 mt-4 text-right font-serif text-xl font-semibold uppercase leading-tight text-white md:text-[4rem]'>
							{props.heading}
						</h2>
						<div className='text-sm leading-4 text-white md:text-xl'>
							{props.tagline && (
								<PortableText content={props.tagline} />
							)}
						</div>
						<div className='mt-6 text-sm leading-normal text-white md:text-xl'>
							{props.text && (
								<PortableText content={props.text} />
							)}
						</div>
						<div className='flex w-full justify-end'>
							{props.cta && props.cta.title && (
								<Cta
									{...props.cta}
                                buttonActionClass='w-auto self-end rounded-lg bg-pa-red-4 px-8 py-4 font-serif font-medium tracking-wider text-2xl text-white shadow-xl'
								/>
							)}
						</div>
					</div>

					<div className='w-full py-6 text-center md:w-3/5'></div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
