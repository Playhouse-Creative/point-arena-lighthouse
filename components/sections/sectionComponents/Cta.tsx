'use client'

import React from 'react'
import Link from 'next/link'
import { CTA } from '../../../lib/types'

const Cta = (props: CTA) => {

	const { title, route, link, anchorLink } = props
	return (
		<>
		  {route ? (
			<button className={props.buttonActionClass}>
			<Link href={route}>
			  {title}
			</Link></button>
		  ) : anchorLink && anchorLink.linkId ? (
			<button className={props.buttonActionClass}>
			<Link href={`/${anchorLink.linkId.current}`}>
			 {title}
			</Link></button>
		  ) : link ? (
			<button className={props.buttonActionClass}>
			<a href={link} className="cta">
			  {title}
			</a>
			</button>
		  ) : (
			<p className="cta">{title}</p>
		  )}
		</>
	  );
	
}

export default Cta
