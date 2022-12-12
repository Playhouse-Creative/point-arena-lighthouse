const Section = require('./sections')



function resolveSections(section: any) {
	const capitalizeString = (str: string) => {
		if (typeof str !== 'string' || !str) return str

		return str.charAt(0).toUpperCase() + str.slice(1)
	}
	// eslint-disable-next-line import/namespace
	const currentSection = Section[capitalizeString(section._type)]

	if (currentSection) {
		return currentSection
	}

	console.error('Cant find section', section) // eslint-disable-line no-console
	return null
}

function RenderSections(props: any) {
	const { sections } = props

	if (!sections) {
		console.error('Missing section')
		return <div>Missing sections</div>
	}

	return (
		<div className="bg-[url('/topography-background.svg')] h-auto w-screen bg-cover p-0">
		
			{sections.map((section:any, i: number) => {
				const Section = resolveSections(section)
				if (!Section) {
					return <div key={i}>Missing section {section._type}</div>
				}
				return (
					
						
						<Section {...section} key={section._key} />
					
				)
			})}
		</div>
	)
}

export default RenderSections