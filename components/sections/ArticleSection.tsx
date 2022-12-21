import React from 'react'
import SideGalleryArticleSection from './SideGalleryArticleSection'
import CarouselArticleSection from './CarouselArticleSection'
import _ from 'lodash'

type Props = {
	title: string
	articleType: string
	
}

export default function ArticleSection(props: Props) {
	return (
		<div>
			{' '}
			{_.has(props.articleType, 'sideGalleryArticle') ? (
				<SideGalleryArticleSection {...props} />
			) : _.has(props.articleType, 'carouselArticle') ? (
				<CarouselArticleSection {...props} />
			)  : null}
		</div>
	)
}