import  BlogPage  from 'components/pages/blog/BlogPage'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { blogPageQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import { PagePayload } from 'types'
import { BlogPagePayload } from 'types'

interface PageProps {
    page: BlogPagePayload
    draftMode: boolean
    token: string | null
}

interface Query {
    [key: string]: string
}

export default function Blog(props: PageProps) {
    const { page: initialPage, draftMode } = props
    const [page, loading] = useLiveQuery<BlogPagePayload | null>(
        initialPage,
        blogPageQuery,
    )

    return (<>
        <BlogPage
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

    const page = await client.fetch<PagePayload | null>(blogPageQuery)

    return {
        props: {
            page,
            draftMode,
            token: draftMode ? readToken : null,
        },
        revalidate: 60,
    }
}
