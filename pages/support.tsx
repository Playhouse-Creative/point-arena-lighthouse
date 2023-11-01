import RenderSections from '../components/renderSections'
import PageLayout from '../components/PageLayout'
import _ from 'lodash'
import { PageData } from '@/lib/types'
import { lazy } from 'react'
import { sanityFetch, token } from '@/lib/sanity.fetch'
import { pageQuery } from '@/lib/sanity.queries'


const PreviewSections = lazy(() => import('../components/PreviewSections'))

const Support = ({ preview, pageData }: { preview: boolean; pageData: PageData }) => {

	return (
		<PageLayout title='Point Arena Lighthouse' description='Come stay at the Point Arena Lighthouse!'>
			<main>
				{preview ? (

					<PreviewSections pageData={pageData} />

				) : (
					<RenderSections pageData={pageData} />
				)}
			</main>
		</PageLayout>
	)
}


export const getStaticProps = async ({ draftMode = false }: { draftMode: boolean }) => {
	const query = pageQuery('support')
	const pageData = await sanityFetch({ draftMode, query })
	return {
		props: {
			draftMode,
			token: draftMode ? token : '',
			pageData,
		},
	}
}

export default Support
