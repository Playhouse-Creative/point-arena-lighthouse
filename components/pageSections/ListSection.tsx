import _ from 'lodash'
import React from 'react'

import GridListSection from './GridListSection'
import InfoListSection from './InfoListSection'
import ReviewListSection from './ReviewListSection'



export default function ListSection(props: any) {
	return (
		<div id={`${props.linkId ? props.linkId.slug.current : null}`}>
			{' '}
			{_.has(props.listType, 'gridList') ? (
				<GridListSection {...props} />
			) : _.has(props.listType, 'infoList') ? (
				<InfoListSection {...props} />
			) : _.has(props.listType, 'reviewList') ? (
				<ReviewListSection {...props} />
			) : null}
		</div>
	)
}
