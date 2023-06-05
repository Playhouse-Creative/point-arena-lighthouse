import { sanityClient } from '@/lib/sanity-server'
import RenderSections from '../components/renderSections'
import PageLayout from '../components/PageLayout'
import _ from 'lodash'
import { PageData } from '@/lib/types'
import { PreviewSuspense } from "next-sanity/preview";
import {lazy} from "react";

const PreviewSections = lazy(() => import("../components/PreviewSections"));



const About = ({ preview, pageData }: {preview: boolean, pageData: Pagedata}) => {
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
		<PageLayout
			title='Point Arena Lighthouse'
			description='Come stay at the Point Arena Lighthouse!'>
			<main>
				{ preview ? ( 
				<PreviewSuspense fallback="Loading...">
					<PreviewSections query={query} />
				</PreviewSuspense>
				):(
				<RenderSections sections={sections} />
				)
			}
			</main>
		</PageLayout>
	)
}

const query = `{"pageSections": *[_type == "page"  && slug == "about"] 
{...,
	content[] {..., linkId->{..., linkId},rows[] {..., cta{..., anchorLink->{..., linkId}}}, cta[]{..., anchorLink->{..., linkId}}}
},
"postData" :*[_type == "post"] | order(publishedAt desc)[0...3]
}`

export async function getStaticProps({ preview = false }) {
	
if (preview) {
	return { props: { preview} };
	}
	const pageData = await sanityClient.fetch(query)
	return {
		props: {
			pageData
		},
	}
}

export default About
