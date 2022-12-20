import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/lib/sanity'

type Props = {
	title: string
	icon: any
}

export default function ListItem(props: Props) {
	return (
		<li className='mb-4 flex w-full items-center justify-start'>
			<Image
				src={urlForImage(props.icon).url()}
				alt={props.title}
				width={35}
				height={35}
			/>
			<p className='ml-4 text-left text-lg font-light'>{props.title}</p>
		</li>
	)
}
