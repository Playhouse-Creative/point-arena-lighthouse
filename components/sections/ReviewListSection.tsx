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
		<div className='relative mx-auto mb-12 max-w-[1600px] border border-pa-navy-4 bg-white px-16 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
			<h3
				className='mt-8
        ml-6 text-left font-serif text-3xl font-semibold text-pa-navy-4'>
				{props.title}
			</h3>
			<ul className='mx-12 my-8 flex flex-col'>
				{list.map((listSection: any, i: number) => {
          const starsIcon = (listSection: any) =>{
            if (listSection.stars === 5)  return(fiveStar); 
            else if(listSection.stars === 4) return(fourStar);
            else if(listSection.stars === 3) return(threeStar);
            else if(listSection.stars === 2) return(twoStar);
            else return(oneStar)
          }
          return(
					<li key={i} className='mt-2 mb-6 flex flex-col'>
						<div >
							<h3 className='text-left text-2xl font-semibold text-pa-navy-4'>
								{listSection.heading}
							</h3>
						</div>
						<ul className='flex items-start'>
              <div className='relative w-48 h-10'>
							<Image
							src={starsIcon(listSection)}
							alt={`${listSection.stars} stars`}
							fill={true}
						/></div>
							<li className='ml-4 text-left text-lg text-pa-navy-4'>
								<PortableText
									content={listSection.body}
									key={i}
								/>
							</li>
						</ul>
					</li>
				)})}
			</ul>
		</div>
	)
}
