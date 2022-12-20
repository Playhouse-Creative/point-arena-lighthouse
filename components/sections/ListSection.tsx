import React from 'react'
import GridListSection from './GridListSection'
import InfoListSection from './InfoListSection'
import ReviewListSection from './ReviewListSection'
import _ from 'lodash'

type Props = {
	listType: any
}

export default function ListSection(props: Props) {
	return (
		<div>
			{' '}
			{_.has(props.listType, 'gridList') ? (
				<GridListSection {...props.listType} />
			) : _.has(props.listType, 'infoList') ? (
				<InfoListSection {...props.listType} />
			) : _.has(props.listType, 'reviewList') ? (
				<ReviewListSection {...props.listType} />
			) : null}
		</div>
	)
}
