import { PostPage } from 'components/pages/post/PostPage'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { resolveHref } from 'lib/sanity.links'
import {
	postBySlugQuery,
	postPaths
} from 'lib/sanity.queries'
import _ from 'lodash'
import { useLiveQuery } from 'next-sanity/preview'
import React from 'react'
import { PagePayload } from 'types'



export default function PostSlugRoute(props) {
	const { draftMode, post: initialPost } = props
	const [post, loading] = useLiveQuery<PagePayload | null>(
		initialPost,
		postBySlugQuery,
		{ slug: initialPost.slug },
	)
	

	return (<>
		<PostPage
			preview={draftMode}
			loading={loading}
			post={post ?? initialPost}
			
		/>
		</>
	)
}



export const getStaticProps = async (ctx) => {
	const { draftMode = false, params = {} } = ctx
	const client = getClient(draftMode)
	const post = await client.fetch(postBySlugQuery, {slug: params.slug})
	
	if (!post) {
		return {
			notFound: true,
		}
	}


	return {
		props: {
			post,			
			draftMode,
			token: draftMode ? readToken : null,
		},
		
	}
}

export const getStaticPaths = async () => {
	const client = getClient()
	const paths = await client.fetch<string[]>(postPaths)

	
	return {
		paths: paths?.map((slug) => resolveHref('post', slug)) || [],
		fallback: 'blocking',
	}
}