import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'

type Props = {
	images: any
	listItems: string[]
	title: string
}

export default function FunFactsSection(props: Props) {
	return (
		<>
			<div className='my-24 h-full  px-4'>
				<div className='mx-auto grid w-full max-w-[1400px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-4 lg:grid-rows-2 gap-4 '>
					<div className='relative row-span-4 lg:row-span-2 bg-pa-green-3 py-10 px-8 md:px-12 z-0'>
					<svg className='absolute left-1 right-1 top-1 bottom-1 w-3/4 h-3/4 m-auto opacity-50 -z-10' id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.27 64.46"><path d="m25.29,9.57h5.57c.31,0,.56-.25.56-.56s-.25-.56-.56-.56h-5.57c-.31,0-.56.25-.56.56s.25.56.56.56Z" fill="#345F2A"/><path d="m27.58,11.29c-.27-.15-.61-.06-.76.2-.15.27-.06.61.2.76l2.41,1.39c.09.05.18.07.28.07.19,0,.38-.1.48-.28.15-.27.06-.61-.2-.76l-2.41-1.39Z" fill="#345F2A"/><path d="m27.3,6.8c.09,0,.19-.02.28-.07l2.41-1.39c.27-.15.36-.5.2-.76-.15-.27-.5-.36-.76-.2l-2.41,1.39c-.27.15-.36.5-.2.76.1.18.29.28.48.28Z" fill="#345F2A"/><path d="m2.81,9.57h5.57c.31,0,.56-.25.56-.56s-.25-.56-.56-.56H2.81c-.31,0-.56.25-.56.56s.25.56.56.56Z" fill="#345F2A"/><path d="m6.09,11.29l-2.41,1.39c-.27.15-.36.5-.2.76.1.18.29.28.48.28.09,0,.19-.02.28-.07l2.41-1.39c.27-.15.36-.5.2-.76-.15-.27-.5-.36-.76-.2Z" fill="#345F2A"/><path d="m3.68,5.33l2.41,1.39c.09.05.18.07.28.07.19,0,.38-.1.48-.28.15-.27.06-.61-.2-.76l-2.41-1.39c-.27-.15-.61-.06-.76.2-.15.27-.06.61.2.76Z" fill="#345F2A"/><path d="m31.52,62.96h-4.79v-7.9h.43c.81,0,1.47-.74,1.47-1.64v-.2l-.1-.17c-.2-.36-1.22-2.13-1.88-3.1l-.22-.33h-5.72v-31.3s1.39,0,1.39,0c.81,0,1.47-.66,1.47-1.47l-.05-.27c-.73-2.21-1.28-3.45-1.72-3.84l-.09-.09.02-.22c0-.05.01-.1.01-.16v-5.52c0-.12-.02-.24-.04-.36l-.02-.15c-.15-.63-.59-1.18-1.19-1.46l-.09-.07-3.74-4.71-3.47,4.66-.08.02c-.91.3-1.52,1.13-1.52,2.07v5.73s-.18.11-.18.11c-.45.12-.93.85-1.86,4.05l-.03.24c0,.78.66,1.43,1.47,1.43h1.39v31.3s-6.02,0-6.02,0l-.22.37c-1.14,1.95-1.62,3.12-1.63,3.14l-.06.14v.15c0,.9.66,1.64,1.47,1.64h.43v7.9H.75c-.41,0-.75.34-.75.75s.34.75.75.75h30.77c.41,0,.75-.34.75-.75s-.34-.75-.75-.75ZM16.72,2.46l1.67,2.1h-3.24l1.57-2.1Zm-3.6,4.29c0-.15.05-.29.15-.42l.07-.09,6.53-.1.06.04c.2.13.33.34.33.58v5.62s-.05.21-.05.21l-.21-.02h-6.84l-.04-.29v-5.52Zm-2.03,10.07l.1-.32c.29-.95.6-1.83.81-2.29l.07-.15h8.89l.07.14c.25.52.58,1.37.9,2.28l.12.33h-10.94Zm8.13,32.69h-5.3v-31.01s5.3,0,5.3,0v31.01Zm-13.22,4.04l.17-.36c.19-.41.53-1.08,1.02-1.95l.07-.13h18.39l.07.12c.4.63.86,1.4,1.17,1.95l.22.38H5.99Zm19.24,9.4H7.89v-7.9h17.34v7.9Z" fill="#345F2A"/></svg>
						<h3 className='text-3xl font-semibold text-white z-10'>
							{props.title}
						</h3>
						<ul className=' list-disc '>
							{props.listItems.map((item: string, i: number) => (
								<li className='mt-6 sm:mt-10  sm:text-xl text-white z-20' key={i}>
									{item}
								</li>
							))}
						</ul>
					</div>
					{props.images.map((image: any, i: number) => (
						<div
							key={i}
							className='relative row-span-1 aspect-square hidden sm:block'>
							<Image
								src={urlForImage(image).url()}
								alt='placeholder'
								fill={true}
								style={{ objectFit: 'cover' }}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
