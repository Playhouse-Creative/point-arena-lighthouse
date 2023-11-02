import { Page } from 'components/pages/page/Page'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import {
  pagePaths,
  pagesBySlugQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import { PagePayload } from 'types'

interface PageProps {
  page: PagePayload
  draftMode: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

export default function PageSlugRoute(props: PageProps) {
  const { page: initialPage, draftMode } = props
  const [page, loading] = useLiveQuery<PagePayload | null>(
    initialPage,
    pagesBySlugQuery,
    {
      slug: initialPage.slug,
    },
  )

  return (
    <Page
      preview={draftMode}
      loading={loading}
      page={page ?? initialPage}
    />
  )
}

export const getStaticProps = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode)

  const page = await client.fetch(pagesBySlugQuery, { slug: params.slug })

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      page,
      draftMode,
      token: draftMode ? readToken : null,
    },
    revalidate: 60,
  }
}

export const getStaticPaths = async () => {
  const client = getClient()
  const paths = await client.fetch<string[]>(pagePaths);

  return {
    paths: paths?.filter((slug) => slug !== '/').map((slug) => resolveHref('page', slug)) || [],
    fallback: false,
  }
}