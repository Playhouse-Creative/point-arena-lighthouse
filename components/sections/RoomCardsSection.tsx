import React from 'react'
import Card from './sectionComponents/roomCard/Card'
import DatePickerSection from './DatePickerSection'

type Props = {
	cards: any
	linkId: {linkId: {current: string}}
	title: string
}

export default function RoomCardsSection(props: Props) {
	return (
		<div id={`${props.linkId ? props.linkId.linkId.current : null}`} className='scroll-mt-96 my-12 px-4 '>
			<DatePickerSection {...props} />
		<div className='lg:mx-auto grid max-w-[1400px]  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
			{props.cards.map((card: any, i: number) => (
				<Card key={i} {...card} bannerColor={i % 2 == 0 ? '#0088A7' : '#054F73'}/>
			))}
		</div>
		</div>
	)
}
