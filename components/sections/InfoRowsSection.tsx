import React from 'react'
import PortableText from 'react-portable-text'
import serializers from '../../lib/portableText-serializers'

interface LinkId {
	slug: {
		current: string;
	};
}

interface Row {
	title: string;
	text: any;
}

interface Props {
	rows?: Row[];
	title?: string;
	linkId?: LinkId;
	finePrint?: any;
}

const InfoRowsSection: React.FC<Props> = ({
	rows = [{ title: '', text: '' }],
	title = '',
	linkId = { slug: { current: '' } },
	finePrint = '',
}) => {
	return (
		<div className='mx-4 my-12 scroll-mt-96' id={linkId?.slug.current.split('#')[1] || null}>
			<h3
				className='mt-10 mb-8 ml-6 font-serif text-4xl font-semibold text-center text-pa-navy-4'>
				{title}
			</h3>
			<div className='relative mx-auto mb-12 max-w-[1400px] border border-pa-navy-4 bg-white text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
				<ul className='flex flex-col flex-wrap justify-around mx-2 my-8 sm:mx-12 lg:flex-row'>
					{rows.map((section: Row = { title: '', text: '' }, i: number) => (
						<li key={i} className='mx-2 mt-2 mb-6 '>
							<h3 className='mb-2 font-serif text-xl font-semibold text-center underline xl:text-2xl text-pa-red-4'>
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
				<div className='mx-4 mb-3 text-pa-navy-4'>
					{finePrint && <PortableText
						content={finePrint}
						serializers={serializers()}
					/>}
				</div>
			</div>
		</div>
	)
}

export default InfoRowsSection;
