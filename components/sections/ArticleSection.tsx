import React from 'react'
import ColumnArticleSection from './ColumnArticleSection'
import CarouselArticleSection from './CarouselArticleSection'
import _ from 'lodash'


type Props = {
	title: string
	articleType: string
	columnArticle: any
	carouselArticle: any
	linkId: {slug: {current: string}}
}

export default function ArticleSection(props: Props) {
	return (
		<div className='scroll-mt-96' id={`${props.linkId ? props.linkId.slug.current : null}`} >
			{' '}
			{(props.articleType === 'columnArticle') ? (
				<ColumnArticleSection {...props} />
			) : (props.articleType === 'carouselArticle') ? (
				<CarouselArticleSection {...props} />
			)  : null}
		</div>
	)
}