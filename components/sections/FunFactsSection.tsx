import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'

type Props = {
	images: any
    listItems: string[]
    title: string
}

export default function FunFactsSection(props: Props) {
	return (
		<div className='my-24 h-full w-screen'>
			<div className='mx-auto grid w-full max-w-[1400px] grid-cols-3 grid-rows-2 gap-4 '>
				<div className='row-span-2 bg-pa-green-3 py-10 px-12'>
                    <h3 className='text-white text-3xl font-semibold'>{props.title}</h3>
					<ul className='list-disc  w-full'>{props.listItems.map((item:string, i: number) => <li className='text-white mt-6 text-xl' key={i}>{item}</li>)}</ul>
				</div>
				{props.images.map((image: any, i: number) => (
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
