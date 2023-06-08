/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { urlForImage } from '@/lib/sanity'

interface LinkId {
	slug: { current?: string }
}

interface Heading {
	icon?: { asset: { _ref?: any } }
	title?: string
}

interface ListItem {
	heading?: Heading | null
	items?: string[] | null
}

interface ListType {
	gridList: ListItem[] | null
}

interface Props {
	listType?: ListType
	title?: string
	linkId?: LinkId
}

export default function GridListSection({
	listType = { gridList: null },
	title = 'Placeholder title',
	linkId = { slug: { current: '' } },
}: Props) {
	const list = listType.gridList || []
	const linkIdValue = linkId?.slug?.current?.split('#')[1] || ''

	return (
		<div id={linkIdValue} className='mx-4 my-12 scroll-mt-96'>
			<div className='relative mx-auto mb-12 max-w-[1600px] place-self-center border border-pa-navy-4 bg-white px-2 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4 sm:px-16'>
				<h3 className='w-full mx-auto mt-8 font-serif text-3xl font-semibold text-center text-pa-navy-4 sm:ml-6 sm:text-left'>
					{title}
				</h3>
				<ul className='grid grid-cols-1 gap-6 mx-2 my-8 sm:mx-12 sm:grid-cols-2'>
					{list.map((listSection, i) => (
						<li key={i} className='flex flex-col '>
							<div className='flex text-pa-navy-4'>
								{listSection.heading?.icon ? (
									<img
										src={urlForImage(listSection.heading.icon.asset._ref || 'default-image-url').url()}
										alt={listSection.heading?.title || 'Placeholder alt text'}
										width={35}
										height={35}
									/>
								) : null}
								<h3 className='ml-4 text-2xl font-semibold text-pa-navy-4'>
									{listSection.heading?.title || 'Placeholder Heading title'}
								</h3>
							</div>
							<ul>
								{listSection.items?.map((item, i) => (
									<li key={i} className='ml-12 text-lg text-left text-pa-navy-4'>
										{item}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
