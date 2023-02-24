import React from 'react'
import ColumnArticleSection from './ColumnArticleSection'
import CarouselArticleSection from './CarouselArticleSection'
import _ from 'lodash'


type Props = {
	title: string
	articleType: string
	columnArticle: any
	carouselArticle: any
	
}

export default function ArticleSection(props: Props) {
	return (
		<div>
			{' '}
			{(props.articleType === 'columnArticle') ? (
				<ColumnArticleSection {...props} />
			) : (props.articleType === 'carouselArticle') ? (
				<CarouselArticleSection {...props} />
			)  : null}
		</div>
	)
}