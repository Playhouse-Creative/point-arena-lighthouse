import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'

type Props = {
	gridImages: any
    heroImage: any
    listItems: string[]
    heading: string
}

export default function FunFactsSection(props: Props) {
	return (
		<div className='mb-24 h-full w-screen'>
			<div className='mx-auto grid w-full max-w-[1600px] grid-cols-4 grid-rows-2 gap-4 '>
				<div className='relative row-span-2 col-span-2'>
                <Image
							src={urlForImage(props.heroImage).url()}
							alt='placeholder'
							fill={true}
							style={{ objectFit: 'cover' }}
						/>
                        <div
					className='absolute left-0 bottom-10 z-20 w-8/12 py-[5px] pl-8'
					style={{ backgroundColor: '#0088A7', clipPath: 'polygon(100% 0%, 96% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)' }}>
					{' '}
					<h2 className='font-serif text-2xl font-semibold text-white'>
						{props.heading}
					</h2>
				</div>
				</div>
				{props.gridImages.map((image: any, i: number) => (
					<div
						key={i}
						className='relative row-span-1 aspect-square bg-pa-green-3'>
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
	)
}