import Img from 'next/image'
import Cta from './sectionComponents/Cta'
import { useNextSanityImage } from 'next-sanity-image'
import { sanityClient } from '@/lib/sanity-server'



const HeroSection = (props: any) => {
	const imageProps: any = useNextSanityImage(sanityClient, props.heroImage.image) 

	return (
		<>
			<div>
				<div className='relative z-0 mx-auto h-[50vh] md:h-[60vh]'>
					{props.heroImage && <Img
						alt={props.heading}
						src={imageProps.src}
						loader={imageProps.loader}
						fill={true}
						priority={true}
						quality={80}
						style={{ objectFit: 'cover' }}
					/>}
					<div className='absolute z-10 flex h-[50vh] w-screen flex-col bg-black/40 md:h-[60vh] '>
						<div className='z-20 mx-auto flex w-[90vw] flex-col pt-[15vh] sm:ml-[5vw] sm:w-1/2 md:pt-[25vh] md:text-right lg:w-1/2 xl:w-5/12 '>
							<h2 className='mt-4 font-serif text-[2.3rem] font-semibold uppercase leading-tight text-white sm:text-[3rem] lg:text-[3.3rem] 2xl:text-[4rem]'>
								{props.heading}
							</h2>
							<h3 className='text-md text-xl text-white md:text-xl'>
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
