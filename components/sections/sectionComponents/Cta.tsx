'use client'

import React from 'react'
import Link from 'next/link'

const Cta = (props: any) => {
	let link = props.route || props.link || '#'
	if (
		props.landingPageRoute &&
		props.landingPageRoute.slug &&
		props.landingPageRoute.slug.current
	) {
		link = props.landingPageRoute.slug.current
	}

	if (props.kind === 'button') {
		return (
			<Link href={link}>
				<button className={props.buttonActionClass}>
					{props.title}
				</button>
			</Link>
		)
	}

	// External
	if (props.link) {
		return (
			<a href={props.link} target='_blank' rel='noopener noreferrer'>
				{props.title}
			</a>
		)
	}

	return (
		<Link className='mr-3' href={link}>
			{props.title}
		</Link>
	)
}

export default Cta
