import React from 'react'
import GridListSection from './GridListSection'
import InfoListSection from './InfoListSection'
import ReviewListSection from './ReviewListSection'
import _ from 'lodash'

type Props = {
	title: string
	listType: string
	gridList: any
	infoList: any
}

export default function ListSection(props: Props) {
	return (
		<div>
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
