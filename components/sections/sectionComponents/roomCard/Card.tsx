import React from 'react'
import RoomCarousel from './RoomCarousel'
import ListItem from './ListItem'
import Link from 'next/link'

type Props = {
	images: {
		_key: string
		_type: string
		alt: string
		asset: {
			_id: string
			url: string
		}
	}[]
	title: string
	featuresList: {title: string
	icon: string}[]
	subHeading: string
	price: string
	bannerColor: string
	children: any
}

export default function Card(props: Props) {
	return (
		<div className='relative z-0 flex flex-col mb-12 text-center transition-colors bg-white border shadow-lg border-pa-navy-4 group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
			<RoomCarousel {...props} />
			<div className='absolute top-0 w-full aspect-square'>
				<div
					className='absolute left-0 -bottom-5 z-30 w-11/12 py-[5px] '
					style={{
						backgroundColor: props.bannerColor,
						boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
						clipPath: 'polygon(100% 0%, 96% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)',
					}}
				>
					{' '}
					<h2 className='font-serif text-base font-semibold text-white md:text-2xl'>{props.title}</h2>
				</div>
			</div>
			<h3 className='mx-8 mt-8 text-lg text-left text-pa-navy-4'>{props.subHeading}</h3>
			<div className='flex flex-col justify-between h-full'>
				<ul className='mx-8 mt-6'>
					{props.featuresList && props.featuresList.map((item: any, i: number) => (
						<ListItem
							key={i}
							{...item}
						/>
					))}
				</ul>
				<div>
					<h3 className='mx-8 mt-6 font-serif text-lg text-left justify-self-end text-pa-green-4 md:text-2xl '>
						{props.price}
					</h3>
					<a
						href='https://pointarenalighthouse.client.innroad.com/'
						target='_blank'
						rel='noreferrer'
					>
						<button className='w-auto px-8 py-4 m-8 font-serif text-base font-medium tracking-wider text-white transition-colors rounded-lg shadow-xl outline-none bg-pa-blue-4 ring-offset-2 hover:bg-pa-blue-3 focus:ring-2 focus:ring-pa-navy-4 focus:hover:ring-pa-navy-4 active:scale-95 md:text-2xl'>
							Reserve
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}
