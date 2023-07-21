import RenderSections from '../components/renderSections'
import PageLayout from '../components/PageLayout'
import _ from 'lodash'
import { PageData } from '@/lib/types'
import { lazy } from 'react'
import { getClient } from 'lib/sanity.client'
import { readToken } from 'lib/sanity.api'
import { pageQuery } from '@/lib/sanity.queries'
import { GetStaticProps } from 'next'

const PreviewSections = lazy(() => import('../components/PreviewSections'))

const Home = ({ preview, pageData }: { preview: boolean; pageData: PageData }) => {

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


export const getStaticProps: GetStaticProps = async (ctx) => {
	const { draftMode = false } = ctx
	const client = getClient(draftMode ? { token: readToken } : undefined)
	const pageData = await client.fetch(pageQuery("home"))
	return {
		props: {
			preview: draftMode,
			pageData,
		},
		
	}
}

export default Home