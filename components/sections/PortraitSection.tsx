import Portrait from './sectionComponents/Portrait'

type Props = {
	heading: string
	id: { id: string }
	portraitImage: {
		name: string
		title: string
		description: string
		_key: string
		_type: string
		_id: string
		image: { asset: { _id: string; url: string } }
	}[]
}

const PortraitSection = (props: Props) => {
	return (
		<div id={`${props.id ? props.id.id : null}`} className='relative my-12 max-w-[1600px] border border-pa-navy-4 bg-white px-4 shadow-lg sm:px-16 2xl:mx-auto'>
			<div>
				<h3 className='mt-8 text-center font-serif text-4xl font-semibold text-pa-navy-4 sm:ml-6'>
					{props.heading}
				</h3>
			</div>
			<div className='mx-auto mt-12 flex w-full auto-rows-auto flex-wrap justify-center justify-items-center'>
				{props.portraitImage?.map((portrait, i: number) => (
					<Portrait key={i} {...portrait} />
				))}
			</div>
		</div>
	)
}

export default PortraitSection
