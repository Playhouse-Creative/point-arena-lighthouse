/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Img from 'next/image'
import { urlForImage } from '@/lib/sanity'

type Props = {
	title: string
	icon: any
}

export default function ListItem(props: Props) {
	return (
		<li className='mb-4 my-4 md:my-2 flex w-full items-center justify-start'>
			<img
				src={urlForImage(props.icon).url()}
				alt={props.title}
				className='md:h-12 md:w-12 h-6 w-6'
			/>
			<p className='ml-4 text-left md:text-lg font-regular text-pa-navy-4'>{props.title}</p>
		</li>
	)
}
