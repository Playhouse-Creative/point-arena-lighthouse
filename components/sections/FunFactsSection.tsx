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
				<div className='mx-auto grid w-full max-w-[1400px] grid-cols-2 lg:grid-cols-3 grid-rows-4 lg:grid-rows-2 gap-4 '>
					<div className='row-span-4 lg:row-span-2 bg-pa-green-3 py-10 px-8 md:px-12'>
						<h3 className='text-3xl font-semibold text-white'>
							{props.title}
						</h3>
						<ul className=' list-disc '>
							{props.listItems.map((item: string, i: number) => (
								<li className='mt-6 sm:mt-10  sm:text-xl text-white' key={i}>
									{item}
								</li>
							))}
						</ul>
					</div>
					{props.images.map((image: any, i: number) => (
						<div
							key={i}
							className='relative row-span-1 aspect-square '>
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
