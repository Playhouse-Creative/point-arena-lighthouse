import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'

type Props = {
	gridList: any
}

export default function GridListSection(props: Props) {
	return (
		<div className='relative mx-auto px-16 mb-12 max-w-[1600px] border border-pa-navy-4 bg-white text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
			<h3
				className='mt-8
        ml-6 text-left font-serif text-3xl font-semibold text-pa-navy-4'>
				Amenities
			</h3>
			<ul className='grid grid-cols-2 gap-4 mx-12 my-8'>
				{console.log(props)}
				{props.gridList.map((listSection, i) => (
					<li key={i} className='flex flex-col '>
                        <div className='flex'>
						<Image
							src={urlForImage(listSection.heading.icon).url()}
							alt={listSection.title}
							width={35}
							height={35}
						/>
						<h3 className='ml-4 text-2xl font-semibold text-pa-navy-4'>{listSection.heading.title}</h3></div>
                        <ul>{listSection.items.map((item, i) => <li key={i} className='text-left text-lg ml-12 text-pa-navy-4'>{item}</li>)}</ul>
					</li>
				))}
			</ul>
		</div>
	)
}
