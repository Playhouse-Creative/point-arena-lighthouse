'use client'

import React from 'react'
import Link from 'next/link'
import { CTA } from '../../../lib/types'

const Cta = (props: CTA) => {
	const { title, route, link, anchorLink } = props
	return (
		<>
			{route ? (
				<Link href={route}>
					<button className={props.buttonActionClass}>{title}</button>
				</Link>
			) : anchorLink && anchorLink.slug ? (
				<Link href={`/${anchorLink.slug.current}`}>
					<button className={props.buttonActionClass}>{title}</button>
				</Link>
			) : link ? (
				<a href={link} className='cta'>
					<button className={props.buttonActionClass}>{title}</button>
				</a>
			) : (
				<p className='cta'>{title}</p>
			)}
		</>
	)
}

export default Cta
