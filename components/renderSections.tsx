const SectionComponents = require('./sections')



function resolveSections(section: any) {
	const capitalizeString = (str: string) => {
		if (typeof str !== 'string' || !str) return str

		return str.charAt(0).toUpperCase() + str.slice(1)
	}
	// eslint-disable-next-line import/namespace
	const Section = SectionComponents[capitalizeString(section._type)]

	if (Section) {
		return Section
	}
	console.error('Cant find section', section) // eslint-disable-line no-console
	return 'loading...'
}

function RenderSections(props: any) {
	const { sections } = props

	

	return (
		<>
			{sections && sections.map((section: any, i: number) => {
				const SectionComponent = resolveSections(section)
				
				return (
					
						<div key={i}>
							
						<SectionComponent {...section}  />
					</div>
				)
			})}
		</>
	)
}

export default RenderSections
