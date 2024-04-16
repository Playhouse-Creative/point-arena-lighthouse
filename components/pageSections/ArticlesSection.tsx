import _ from 'lodash'
import React from 'react'

import CarouselArticle from './sectionComponents/CarouselArticle'
import ColumnArticle from './sectionComponents/ColumnArticle'


type Props = {
	title: string
	articleType: string
	heading: string
    images: any
    body: any
	linkId?: {slug: {current: string}}
}

export default function ArticlesSection(props: Props) {
	const id = props.linkId?.slug?.current?.split('#')[1]
	return (
		<div className='scroll-mt-96' id={id}>
			{' '}
			{(props.articleType === 'columnArticle') ? (
				<><ColumnArticle {...props} /></>
			) : (props.articleType === 'carouselArticle') ? (
				<CarouselArticle {...props} />
			)  : null}
		</div>
	)
}