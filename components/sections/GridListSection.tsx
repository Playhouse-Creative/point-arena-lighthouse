import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'

type Props = {
	gridList: any
	title: string
	listType: any
}

export default function GridListSection(props: Props) {
	const list = props.listType.gridList
	return (
		<div className='mx-4 my-12'>
			<div className='relative mx-auto mb-12 max-w-[1600px] place-self-center border border-pa-navy-4 bg-white px-2 sm:px-16 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
				<h3
					className='mt-8
        sm:ml-6 mx-auto w-full text-center sm:text-left font-serif text-3xl font-semibold text-pa-navy-4'>
					{props.title}
				</h3>
				<ul className='mx-2 sm:mx-12 my-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>
					{list.map((listSection: any, i: number) => (
						<li key={i} className='flex flex-col '>
							<div className='flex'>
								<Image
									src={urlForImage(
										listSection.heading.icon
									).url()}
									alt={listSection.heading.title}
									width={35}
									height={35}
								/>
								<h3 className='ml-4 text-2xl font-semibold text-pa-navy-4'>
									{listSection.heading.title}
								</h3>
							</div>
							<ul>
								{listSection.items.map(
									(item: string, i: number) => (
										<li
											key={i}
											className='ml-12 text-left text-lg text-pa-navy-4'>
											{item}
										</li>
									)
								)}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
