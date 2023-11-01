import React from 'react';

import DatePickerSection from './DatePickerSection';
import Card from './sectionComponents/roomCard/Card';

interface LinkId {
	slug: {
		current: string;
	};
}

interface CardProps {
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

interface Props {
	cards?: CardProps[];
	linkId?: LinkId;
	title?: string;
}

const RoomCardsSection: React.FC<Props> = ({
	cards = [],
	linkId = { slug: { current: '' } },
	title = '',
}) => {
	return (
		<div id={`${linkId?.slug.current.split('#')[1] || null}`} className='px-4 my-12 scroll-mt-96 '>
			<DatePickerSection {...{ cards, linkId, title }} />
			<div className='lg:mx-auto grid max-w-[1400px] z-0 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
				{cards.map((card , i: number) => (
					<Card key={i} {...card} bannerColor={i % 2 === 0 ? '#0088A7' : '#054F73'} />
				))}
			</div>
		</div>
	);
};

export default RoomCardsSection;
