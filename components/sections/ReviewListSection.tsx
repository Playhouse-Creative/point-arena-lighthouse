import React from 'react';
import Image from 'next/image';
import PortableText from 'react-portable-text';
import serializers from '@/lib/portableText-serializers';
import fiveStar from '../../public/5-star.svg';
import fourStar from '../../public/4-star.svg';
import threeStar from '../../public/3-star.svg';
import twoStar from '../../public/2-star.svg';
import oneStar from '../../public/1-star.svg';

interface LinkId {
	slug: {
		current: string;
	};
}

interface ListSection {
	heading: string;
	stars: number;
	body: any;
}

interface ListType {
	reviewList: ListSection[];
}

interface Props {
	gridList?: any;
	title?: string;
	listType?: ListType;
	linkId?: LinkId;
}

const ReviewListSection: React.FC<Props> = ({
	gridList = [],
	title = '',
	listType = { reviewList: [] },
	linkId = { slug: { current: '' } },
}) => {
	const list = listType?.reviewList || [];

	const starsIcon = (stars: number) => {
		switch (stars) {
			case 5:
				return fiveStar;
			case 4:
				return fourStar;
			case 3:
				return threeStar;
			case 2:
				return twoStar;
			default:
				return oneStar;
		}
	};

	return (
		<div id={`${linkId?.slug.current.split('#')[1] || null}`} className='mx-4 my-12 scroll-mt-96'>
			<div className='relative mx-auto mb-12 max-w-[1600px] border border-pa-navy-4 bg-white px-2 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4 sm:px-16'>
				<h3 className='mt-8 ml-6 font-serif text-3xl font-semibold text-left text-pa-navy-4'>{title}</h3>
				<ul className='mx-2 my-8 flex h-[550px] flex-col overflow-y-auto overscroll-contain sm:mx-12'>
					{list.map((listSection = { heading: '', stars: 0, body: '' }, i: number) => (
						<li key={i} className='flex flex-col mt-2 mb-6 '>
							<div className='flex flex-col mb-2'>
								<h3 className='text-2xl font-semibold text-left text-pa-navy-4'>{listSection.heading}</h3>
								<div className='relative w-24 h-8 sm:hidden'>
									<Image
										src={starsIcon(listSection.stars)}
										alt={`${listSection.stars} stars`}
										fill={true}
										style={{ objectFit: 'contain' }}
										sizes="(max-width: 768px) 30vw, (max-width: 1200px) 25vw, 15vw"
									/>
								</div>
							</div>
							<ul className='flex items-start'>
								<div className='relative hidden h-10 w-36 -scale-x-100 sm:block'>
									<Image
										src={starsIcon(listSection.stars)}
										alt={`${listSection.stars} stars`}
										fill={true}
										style={{ objectFit: 'contain' }}
										sizes="(max-width: 768px) 30vw, (max-width: 1200px) 25vw, 15vw"
									/>
								</div>
								<li className='w-full mr-10 text-lg text-left text-pa-navy-4 sm:ml-4'>
									<PortableText content={listSection.body} key={i} serializers={serializers()} />
								</li>
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ReviewListSection;
