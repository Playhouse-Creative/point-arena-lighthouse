import { sanityClient } from '@/lib/sanity-server'
import RenderSections from '../components/RenderSections'
import PageLayout from '../components/PageLayout'
import _ from 'lodash'

type Props = {
	pageData: any
	posts: any
}

const Home = ({ pageData }: Props) => {
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
			description='Come stay at the Point Arena Lighthouse!'>
			<main>
				<RenderSections sections={sections} />
			</main>
		</PageLayout>
	)
}

const query = `{"pageSections": *[_type == "page"  && title == "Home"] ,
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

export default Home
