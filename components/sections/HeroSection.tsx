import Image from 'next/image'
import PortableText from 'react-portable-text'
import { urlForImage } from '@/lib/sanity'
import Cta from './sectionComponents/Cta'

const HeroSection = (props: any) => {
	return (
		<>
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
					<div className='absolute z-10 flex h-[50vh] w-screen flex-col bg-black/40 md:h-[80vh] '>
						<div className='z-20 mx-auto flex w-[90vw] flex-col pt-[15vh] sm:ml-[5vw] sm:w-1/2 md:pt-[35vh] md:text-right lg:w-1/2 xl:w-5/12 '>
							<h2 className='mt-4  bg-gray-900/30 p-3 font-serif text-[2.3rem] font-semibold uppercase leading-tight text-white sm:text-[3rem] lg:text-[3.3rem] 2xl:text-[4rem]'>
								{props.heading}
							</h2>
							<h3 className='text-md  bg-gray-900/30 p-3 text-xl text-white md:text-xl md:leading-4'>
								{props.subheading}
							</h3>
							<div className='mr-6 flex flex-row sm:w-full sm:justify-end'>
								{props.cta &&
									props.cta.map((cta: any, i: number) => (
										<Cta
											key={i}
											{...cta}
											buttonActionClass='inline-flex items-center justify-center mt-4 ml-8 border border-transparent self-end rounded-lg bg-pa-red-4 hover:bg-pa-red-3 px-4 md:px-8 py-2 md:py-4 font-serif font-medium tracking-wider text-2xl text-white shadow-xl'
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
