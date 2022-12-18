import React from 'react'
import RoomCarousel from './RoomCarousel'


type Props = {
    images:any
    bannerColor: string
    title: string
}

export default function Card(props: Props) {
	return (
		<div className='h-[100vh] relative border text-center border-pa-navy-4 bg-white transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>{console.log(props)}
			<RoomCarousel {...props} />
            <div
					className='absolute left-0 top-[455px] w-11/12 py-[5px]'
					style={{ backgroundColor: props.bannerColor, clipPath: 'polygon(100% 0%, 96% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)' }}>
					{' '}
					<h2 className='font-serif text-2xl font-semibold text-white'>
						{props.title}
					</h2>
				</div>
		</div>
	)
}
