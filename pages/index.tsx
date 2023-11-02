import { HomePage } from 'components/pages/home/HomePage'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { homePageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import { PagePayload } from 'types'
import { HomePagePayload } from 'types'

interface PageProps {
  page: HomePagePayload
  draftMode: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

export default function IndexPage(props: PageProps) {
  const { page: initialPage, draftMode } = props
  const [page, loading] = useLiveQuery<HomePagePayload | null>(
    initialPage,
    homePageQuery,
  )

  return (<>
    <HomePage
      preview={draftMode}
      loading={loading}
      page={page ?? initialPage}
    />
  </>
  )
}



export const getStaticProps = async (ctx: { draftMode?: false | undefined }) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode)

  const page = await client.fetch<PagePayload | null>(homePageQuery)


  return {
    props: {
      page,
      draftMode,
      token: draftMode ? readToken : null,
    },
  }
}
