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
	return null
}

function RenderSections(props: any) {
	const { sections } = props

	if (!sections) {
		console.error('Missing section')
		return <div>Missing sections</div>
	}

	return (
		<>
			{sections.map((section: any, i: number) => {
				const SectionComponent = resolveSections(section)
				if (!SectionComponent) {
					return <div key={i}>Missing section {section._type}</div>
				}
				return (
					
						<div key={section._key}>
						<SectionComponent {...section}  />
					</div>
				)
			})}
		</>
	)
}

export default RenderSections
