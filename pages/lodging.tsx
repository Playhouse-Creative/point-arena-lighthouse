import { sanityClient } from '@/lib/sanity-server'
import RenderSections from '../components/renderSections'
import PageLayout from '../components/PageLayout'
import _ from 'lodash'
import { PageData } from '@/lib/types'


const Lodging = ({ pageData }: PageData) => {
	const sections = pageData.pageSections //flatten pageData and add posts to the blogPreviewSection object
		.map((data: any) => data.content)
		.flat(1)
		.map((newSection: any) => {
			const posts = { posts: pageData.postData }
			const addPostData = _.merge(newSection, posts)
			return newSection._type === 'blogPreviewSection'
				? addPostData
				: newSection
		})

	return (
		<PageLayout
			title='Point Arena Lighthouse'
			description='Lodging at the Point Arena Lighthouse!'>
			<main>
				<RenderSections sections={sections} />
			</main>
		</PageLayout>
	)
}

const query = `{"pageSections": *[_type == "page"  && slug == "lodging"]{
	...,
	heroImage{ asset->{...,
		metadata{
		  lqip
		}}
}
{...,
	content[] {..., id->{..., id}}
   },
} ,
"postData" :*[_type == "post"] | order(publishedAt desc)[0...3]
  }`

export async function getStaticProps() {
	const pageData = await sanityClient.fetch(query)

	return {
		props: {
			pageData,
		},
	}
}

export default Lodging
