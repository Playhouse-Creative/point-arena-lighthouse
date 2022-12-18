import React from 'react'
import Card from './sectionComponents/roomCard/Card'

type Props = {
	cards: any
}

export default function RoomCardsSection(props: Props) {
	return (
		<div className='mx-auto grid w-full max-w-[1400px] grid-flow-row grid-cols-3 gap-6'>
			{props.cards.map((card: any, i: number) => (
				<Card key={i} {...card} bannerColor={i % 2 == 0 ? '#0088A7' : '#054F73'}/>
			))}
		</div>
	)
}
