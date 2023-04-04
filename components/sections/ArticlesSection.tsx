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
	linkId: {linkId: {current: string}}
}

export default function ArticlesSection(props: Props) {
	return (
		<div className='scroll-mt-96' id={`${props.linkId ? props.linkId.linkId.current : null}`}>
			{' '}
			{(props.articleType === 'columnArticle') ? (
				<ColumnArticle {...props} />
			) : (props.articleType === 'carouselArticle') ? (
				<CarouselArticle {...props} />
			)  : null}
		</div>
	)
}