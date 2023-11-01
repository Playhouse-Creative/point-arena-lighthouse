import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import RenderSections from '../components/renderSections'
import PageLayout from '../components/PageLayout'
import { useLiveQuery } from 'next-sanity/preview'
import _ from 'lodash'
import { PageData } from '@/lib/types'
import { pageQuery } from '@/lib/sanity.queries'
import { readToken } from '@/lib/sanity.api'
import { getClient } from '@/lib/sanity.client'



const Home = (props: InferGetStaticPropsType<typeof getStaticProps>,) => {
	const query = pageQuery("home")
	const [pageData] = useLiveQuery(props.pageData, query)
	return (
		<PageLayout title='Point Arena Lighthouse' description='Come stay at the Point Arena Lighthouse!'>
			<main>
				{/* <LiveQuery enabled={draftMode} query={query} initialData={[pageData]}> */}
					<RenderSections pageData={pageData} />
				{/* </LiveQuery> */}
				
			</main>
		</PageLayout>
	)
}


export const getStaticProps = async ({ draftMode= false }: { draftMode: boolean }) => {
	const query = pageQuery("home")
	const client = getClient(draftMode ? { token: readToken } : undefined)
	const pageData = await client.fetch(query)
	return {
		props: {
			draftMode,
			token: draftMode ? readToken : '',
			pageData,
		},
		
	}
}


export default Home