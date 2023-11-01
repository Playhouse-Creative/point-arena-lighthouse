/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { urlForImage } from '../../../../lib/sanity.image'

type Props = {
	title: string
	icon: any
}

export default function ListItem(props: Props) {
	return (
		<li className='flex items-center justify-start w-full my-4 mb-4 md:my-2'>
			<img
				src={urlForImage(props.icon)?.url()}
				alt={props.title}
				className='w-6 h-6 md:h-12 md:w-12'
			/>
			<p className='ml-4 text-left md:text-lg font-regular text-pa-navy-4'>{props.title}</p>
		</li>
	)
}
