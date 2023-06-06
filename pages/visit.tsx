import { sanityClient } from '@/lib/sanity-server'
import RenderSections from '../components/renderSections'
import PageLayout from '../components/PageLayout'
import _ from 'lodash'
import { PageData } from '@/lib/types'
import { PreviewSuspense } from "next-sanity/preview";
import {lazy} from "react";

const PreviewSections = lazy(() => import("../components/PreviewSections"));


const Visit = ({ preview, pageData }: {preview: boolean, pageData: Pagedata}) => {
	
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
				<RenderSections pageData={pageData} />
				)
			}
			</main>
		</PageLayout>
	)
}

const query = `{"pageSections": *[_type == "page"  && id == "visit"] 
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

export default Visit