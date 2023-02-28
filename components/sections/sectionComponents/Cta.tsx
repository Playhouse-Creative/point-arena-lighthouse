'use client'

import React from 'react'
import Link from 'next/link'
import {CTA} from '../../../lib/types'

const Cta = (props: CTA) => {
	let link = props.route || props.link || '#'
	if (
		props.landingPageRoute &&
		props.landingPageRoute.slug &&
		props.landingPageRoute.slug.current
	) {
		link = props.landingPageRoute.slug.current
		return (
			<button className={props.buttonActionClass}>
				<Link href={link}>{props.title}</Link>
			</button>
		)
	}
	// External
	if (props.link) {
		return (
			<button className={props.buttonActionClass}><a href={props.link} target='_blank' rel='noopener noreferrer'>
				{props.title}
			</a></button>
		)
	}

	return (
		<button className={props.buttonActionClass}>
		<Link className='mr-3' href={link}>
			{props.title}
		</Link></button>
	)
}

export default Cta
