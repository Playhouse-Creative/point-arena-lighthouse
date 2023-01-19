import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'
import PortableText from 'react-portable-text'
import fiveStar from '../../public/5-star.svg'
import fourStar from '../../public/4-star.svg'
import threeStar from '../../public/3-star.svg'
import twoStar from '../../public/2-star.svg'
import oneStar from '../../public/1-star.svg'

type Props = {
	gridList: any
	title: string
	listType: any
}

export default function ReviewListSection(props: Props) {
	const list = props.listType.reviewList
	return (
		<div className='mx-4 my-12'>
			<div className='relative mx-auto mb-12 max-w-[1600px] border border-pa-navy-4 bg-white px-2 sm:px-16 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
				<h3
					className='mt-8
        ml-6 text-left font-serif text-3xl font-semibold text-pa-navy-4'>
					{props.title}
				</h3>
				<ul className='mx-2 sm:mx-12 my-8 flex h-[550px] flex-col overflow-y-auto overscroll-contain'>
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
								<div className='flex flex-col mb-2'>
									<h3 className='text-left text-2xl font-semibold text-pa-navy-4'>
										{listSection.heading}
									</h3>
									<div className='relative h-8 w-24'>
										<Image
											src={starsIcon(listSection)}
											alt={`${listSection.stars} stars`}
											fill={true}
											style={{ objectFit: 'contain' }}
										/>
									</div>
								</div>
								<ul className='flex items-start'>
									<div className='relative h-10 w-36 hidden sm:block'>
										<Image
											src={starsIcon(listSection)}
											alt={`${listSection.stars} stars`}
											fill={true}
											style={{ objectFit: 'contain' }}
										/>
									</div>
									<li className='sm:ml-4 mr-10 w-full text-left text-lg text-pa-navy-4'>
										<PortableText
											content={listSection.body}
											key={i}
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
