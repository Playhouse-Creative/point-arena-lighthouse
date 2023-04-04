import React from 'react'
import PortableText from 'react-portable-text'
import serializers from '../../lib/portableText-serializers';


type Props = {
	infoList: string
	listType: any
	title: string
	linkId: {linkId: {current: string}}
}

export default function InfoListSection(props: Props) {
	const list = props.listType.infoList
	return (
		<div id={`${props.linkId ? props.linkId.linkId.current : null}`} className='scroll-mt-96 mx-4 my-12'>
		<div className='relative mx-auto mb-12 max-w-[1600px] border border-pa-navy-4 bg-white text-center shadow-lg '>
			<h3
				className='mt-8
        sm:ml-6 mx-auto w-full text-center sm:text-left font-serif text-3xl font-semibold text-pa-navy-4'>
				{props.title}
			</h3>
			<ul className='mx-2 sm:mx-12 my-8 flex flex-col'>
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
									serializers={serializers()}
								/>
							</li>
						</ul>
					</li>
				))}
			</ul>
		</div></div>
	)
}
