import React from 'react'
import RoomCarousel from './RoomCarousel'
import ListItem from './ListItem'

type Props = {
	images: any
	title: string
	featuresList: any
	subHeading: string
	price: string
	bannerColor: string
	children: any
}

export default function Card(props: Props) {
	return (
		<div className='relative mb-12 border border-pa-navy-4 bg-white text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
			<RoomCarousel  {...props}/>
			<div className='absolute top-0 aspect-square w-full'>
			<div
				className='absolute left-0 z-40 -bottom-5 w-11/12 py-[5px] '
				style={{
					backgroundColor: props.bannerColor,
					boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
					clipPath:
						'polygon(100% 0%, 96% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)',
				}}>
				{' '}
				<h2 className='font-serif text-2xl font-semibold text-white'>
					{props.title}
				</h2>
			</div></div>
			<h3 className='mx-8 mt-8 text-left text-lg'>{props.subHeading}</h3>
			<ul className='mx-8 mt-6'>
				{props.featuresList.map((item: any, i: number) => (
					<ListItem key={i} {...item} />
				))}
			</ul>
			<h3 className='mx-8 mb-8 mt-6 text-left font-serif text-3xl text-pa-green-4'>
				${props.price}/night*
			</h3>
			<div className='mb-8 flex w-full justify-end '>
				<button className='mr-8 w-auto rounded-lg bg-pa-blue-4 px-8 py-4 font-serif text-2xl font-medium tracking-wider text-white shadow-xl outline-none transition-colors hover:bg-pa-blue-3 active:scale-95 ring-offset-2 focus:ring-pa-navy-4 focus:ring-2 focus:hover:ring-pa-navy-4'>
					Reserve
				</button>
			</div>
		</div>
	)
}
