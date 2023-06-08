const SectionComponents = require('./sections')
import _ from 'lodash'



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

function RenderSections({pageData}: any) {
	const sections = pageData?.pageSections?.map((data: any) => data.content) //flatten pageData and add posts to the blogPreviewSection object
		.flat(1)
		.map((newSection: any) => {
			const posts = { posts: pageData.postData }
			const addPostData = _.merge(newSection, posts)
			return newSection._type === 'blogPreviewSection'
				? addPostData
				: newSection
		})

	

	return (
		<>
			{sections?.map((section: any, i: number) => {
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
