import React from 'react'
import ColumnArticle from './sectionComponents/ColumnArticle'
import CarouselArticle from './sectionComponents/CarouselArticle'
import _ from 'lodash'


type Props = {
	title: string
	articleType: string
	heading: string
    images: any
    body: any
	id: {id: string}
}

export default function ArticlesSection(props: Props) {
	return (
		<div id={`${props.id ? props.id.id : null}`}>
			{' '}
			{(props.articleType === 'columnArticle') ? (
				<ColumnArticle {...props} />
			) : (props.articleType === 'carouselArticle') ? (
				<CarouselArticle {...props} />
			)  : null}
		</div>
	)
}