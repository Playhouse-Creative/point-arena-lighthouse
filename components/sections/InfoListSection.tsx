import React from 'react'
import PortableText from 'react-portable-text'

type Props = {
	infoList: any
	listType: any
	title: string
}

export default function InfoListSection(props: Props) {
	const list = props.listType.infoList
	return (
		<div className='relative mx-auto mb-12 max-w-[1600px] border border-pa-navy-4 bg-white px-16 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
			<h3
				className='mt-8
        ml-6 text-left font-serif text-3xl font-semibold text-pa-navy-4'>
				{props.title}
			</h3>
			<ul className='mx-12 my-8 flex flex-col'>
				{list.map((listSection: any, i: number) => (
					<li key={i} className='mt-2 mb-6 flex flex-col'>
						<div className='flex'>
							<h3 className='ml-4 text-2xl font-semibold text-pa-navy-4'>
								{listSection.heading}
							</h3>
						</div>
						<ul>
							<li className='ml-12 text-left text-lg text-pa-navy-4'>
								<PortableText
									content={listSection.body}
									key={i}
								/>
							</li>
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}
