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
		<div className='mb-24 w-screen px-4'>
			<div className='mx-auto pt-4 grid max-w-[1600px] grid-cols-4 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-4 '>
				<div className='relative row-span-3 col-span-4 md:row-span-2 md:col-span-2 aspect-square'>
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
						className='relative row-span-1 col-span-1 aspect-square '>
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