import React from 'react'
import PortableText from 'react-portable-text'
import serializers from '../../lib/portableText-serializers'

type Props = {
	rows: {
		title: string
		text: any
	}[]
	title: string
	linkId: { slug: {current: string} }
	finePrint: any
}

export default function InfoRowsSection(props: Props) {
	return (
		<div className='mx-4 my-12 scroll-mt-96' id={`${props.linkId ? props.linkId.slug.current.split('#')[1] : null}`}>
			<h3
				className='mt-10
        ml-6 mb-8 text-center font-serif text-4xl font-semibold text-pa-navy-4'>
				{props.title}
			</h3>
			<div className='relative mx-auto mb-12 max-w-[1400px] border border-pa-navy-4 bg-white text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
				<ul className='mx-2 my-8 flex flex-wrap flex-col justify-around sm:mx-12 lg:flex-row'>
					{props.rows.map((section, i: number) => (
						<li key={i} className='mt-2 mb-6 mx-2 '>
							<h3 className='mb-2 text-center font-serif xl:text-2xl text-xl font-semibold text-pa-red-4 underline'>
								{section.title}
							</h3>
							<div className='text-center text-pa-navy-4 '>
								<PortableText
									content={section.text}
									key={i}
									serializers={serializers()}
								/>
							</div>
						</li>
					))}
				</ul>
				<div className='mb-3 text-pa-navy-4 mx-4'>
					{props.finePrint && <PortableText
						content={props.finePrint}
						serializers={serializers()}
					/>}
				</div>
			</div>
		</div>
	)
}
