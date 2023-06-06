import React from 'react'
import PortableText from 'react-portable-text'
import serializers from '../../lib/portableText-serializers';

interface LinkId {
	slug: {
		current: string;
	};
}

interface ListSection {
	heading: string;
	body: string;
}

interface ListType {
	infoList: ListSection[];
}

interface Props {
	infoList?: string;
	listType?: ListType;
	title?: string;
	linkId?: LinkId;
}

const InfoListSection: React.FC<Props> = ({
	infoList = '',
	listType = { infoList: [{ heading: '', body: '' }] },
	title = '',
	linkId = { slug: { current: '' } },
}) => {
	const list = listType.infoList;
	return (
		<div id={linkId?.slug.current.split('#')[1] || null} className='mx-4 my-12 scroll-mt-96'>
			<div className='relative mx-auto mb-12 max-w-[1600px] border border-pa-navy-4 bg-white text-center shadow-lg '>
				<h3
					className='w-full mx-auto mt-8 font-serif text-3xl font-semibold text-center sm:ml-6 sm:text-left text-pa-navy-4'>
					{title}
				</h3>
				<ul className='flex flex-col mx-2 my-8 sm:mx-12'>
					{list.map((listSection: ListSection = { heading: '', body: '' }, i: number) => (
						<li key={i} className='flex flex-col mt-2 mb-6'>
							<div className='flex'>
								<h3 className='ml-4 text-2xl font-semibold text-pa-navy-4'>
									{listSection.heading}
								</h3>
							</div>
							<ul>
								<li className='ml-12 text-lg text-left text-pa-navy-4'>
									<PortableText
										content={listSection.body}
										key={i}
										serializers={serializers()}
									/>
								</li>
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default InfoListSection;
