import React from 'react'
import Card from './sectionComponents/roomCard/Card'

type Props = {
	cards: any
}

export default function RoomCardsSection(props: Props) {
	return (
		<div className='lg:mx-auto mx-4 grid w-full max-w-[1400px] grid-flow-row lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
			{props.cards.map((card: any, i: number) => (
				<Card key={i} {...card} bannerColor={i % 2 == 0 ? '#0088A7' : '#054F73'}/>
			))}
		</div>
	)
}
