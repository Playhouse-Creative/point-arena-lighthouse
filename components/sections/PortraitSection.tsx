import React from 'react'
import Portrait from './sectionComponents/Portrait'

interface LinkId {
	slug: {
		current: string
	}
}

interface Image {
	asset: {
		_id: string
		url: string
	}
}

export interface PortraitImage {
	name: string
	title: string
	description: string
	key: string
	_key: string
	_type: string
	_id: string
	image: Image
}

interface Props {
	heading?: string
	linkId?: LinkId
	portraitImage?: (PortraitImage)[] | null
}

const PortraitSection: React.FC<Props> = ({
	heading = '',
	linkId = { slug: { current: '' } },
	portraitImage = [],
}) => {
	const portraitImages = portraitImage || []
	return (
		<div
			id={`${linkId?.slug.current.split('#')[1] || null}`}
			className='relative my-12 max-w-[1600px] scroll-mt-96 border border-pa-navy-4 bg-white px-4 shadow-lg sm:px-16 2xl:mx-auto'
		>
			<div>
				<h3 className='mt-8 font-serif text-4xl font-semibold text-center text-pa-navy-4 sm:ml-6'>
					{heading ? heading : 'Placeholder Heading'}
				</h3>
			</div>

			<div className='flex flex-wrap justify-center w-full mx-auto mt-12 auto-rows-auto justify-items-center'>
				{portraitImages?.map((portrait: PortraitImage ) => (
					<Portrait
						key={portrait._key}
						name={portrait.name}
						title={portrait.title}
						description={portrait.description}
						_key={portrait._key}
						_type={portrait._type}
						_id={portrait._id}
						image={portrait.image}
					/>
				))}
			</div>
		</div>
	)
}

export default PortraitSection
