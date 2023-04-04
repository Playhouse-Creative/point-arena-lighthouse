import React from 'react'
import Image from 'next/image'
import PortableText from 'react-portable-text'
import serializers from '@/lib/portableText-serializers'
import fiveStar from '../../public/5-star.svg'
import fourStar from '../../public/4-star.svg'
import threeStar from '../../public/3-star.svg'
import twoStar from '../../public/2-star.svg'
import oneStar from '../../public/1-star.svg'

type Props = {
	gridList: any
	title: string
	listType: any
	linkId: { linkId: { current: string } }
}

export default function ReviewListSection(props: Props) {
	const list = props.listType.reviewList
	return (
		<div id={`${props.linkId ? props.linkId.linkId.current : null}`} className='scroll-mt-96 mx-4 my-12'>
			<div className='relative mx-auto mb-12 max-w-[1600px] border border-pa-navy-4 bg-white px-2 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4 sm:px-16'>
				<h3
					className='mt-8
        ml-6 text-left font-serif text-3xl font-semibold text-pa-navy-4'>
					{props.title}
				</h3>
				<ul className='mx-2 my-8 flex h-[550px] flex-col overflow-y-auto overscroll-contain sm:mx-12'>
					{list.map((listSection: any, i: number) => {
						const starsIcon = (listSection: any) => {
							if (listSection.stars === 5) return fiveStar
							else if (listSection.stars === 4) return fourStar
							else if (listSection.stars === 3) return threeStar
							else if (listSection.stars === 2) return twoStar
							else return oneStar
						}
						return (
							<li key={i} className=' mt-2 mb-6 flex flex-col'>
								<div className='mb-2 flex flex-col'>
									<h3 className='text-left text-2xl font-semibold text-pa-navy-4'>
										{listSection.heading}
									</h3>
									<div className='relative h-8 w-24 sm:hidden'>
										<Image
											src={starsIcon(listSection)}
											alt={`${listSection.stars} stars`}
											fill={true}
											style={{ objectFit: 'contain' }}
											sizes="(max-width: 768px) 30vw,
              					(max-width: 1200px) 25vw,
              					15vw"
										/>
									</div>
								</div>
								<ul className='flex items-start'>
									<div className='relative hidden h-10 w-36 -scale-x-100 sm:block'>
										<Image
											src={starsIcon(listSection)}
											alt={`${listSection.stars} stars`}
											fill={true}
											style={{ objectFit: 'contain' }}
											sizes="(max-width: 768px) 30vw,
              					(max-width: 1200px) 25vw,
              					15vw"
										/>
									</div>
									<li className='mr-10 w-full text-left text-lg text-pa-navy-4 sm:ml-4'>
										<PortableText
											content={listSection.body}
											key={i}
											serializers={serializers()}
										/>
									</li>
								</ul>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
