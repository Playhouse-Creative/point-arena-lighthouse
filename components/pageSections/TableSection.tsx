import Link from 'next/link'
import React from 'react'
import PortableText from 'react-portable-text'

import serializers from '../../lib/portableText-serializers'

type Column = {
	columnHeader: string
	columnCells?: {
		heading: string
		text: any
		link?: {
			route: string
			href: string
		}
	}[]
}

type LinkId = {
	slug: {
		current: string
	}
}

type Props = {
	columns: {
		columnOne?: Column
		columnTwo?: Column
	}
	title?: string
	linkId?: LinkId
}

export default function TableSection({ columns = {}, title = 'Placeholder Title', linkId }: Props) {
	const columnOneCells = columns.columnOne?.columnCells || []
	const columnTwoCells = columns.columnTwo?.columnCells || []

	const rowsCount = Math.max(columnOneCells.length, columnTwoCells.length)

	return (
		<div
			id={`${linkId ? linkId.slug.current.split('#')[1] : null}`}
			className='mx-4 my-12 scroll-mt-96'
		>
			<h3 className='mt-10 mb-8 ml-6 font-serif text-4xl font-semibold text-center text-pa-navy-4'>
				{title}
			</h3>
			<table className='relative mx-auto mb-12 w-full max-w-[1400px] border border-pa-navy-4 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
				<thead>
					<tr className='flex justify-start py-1 font-serif text-lg text-white uppercase bg-pa-navy-4'>
						<th className='w-1/2 ml-8 text-left'>{columns.columnOne?.columnHeader}</th>
						<th className='w-1/2 ml-8 text-left'>{columns.columnTwo?.columnHeader}</th>
					</tr>
				</thead>
				{Array.from({ length: rowsCount }).map((_, i) => {
					const cellOne = columnOneCells[i];
					const cellTwo = columnTwoCells[i];

					return (
						<tbody key={i}>
							<tr className='flex justify-start border-b-[1px] border-pa-blue-4 bg-white py-4'>
								<td className='flex flex-col flex-wrap w-1/2 mx-2 text-left sm:mx-10'>
									{cellOne?.link ? (
										<Link href={cellOne.link.href || cellOne.link.route}>
											<h3 className='font-serif text-lg font-semibold text-pa-red-4'>
												{cellOne.heading}
											</h3>
										</Link>

									) : (
										<h3 className='font-serif text-lg font-semibold text-pa-red-4'>
											{cellOne?.heading}
										</h3>
									)}
									{cellOne?.text ? (
										<PortableText
											content={cellOne.text}
											serializers={serializers()}
										/>
									) : (
										null
									)}
								</td>
								<td className='flex flex-col flex-wrap w-1/2 mx-2 text-left sm:mx-10'>
									{cellTwo?.link?.href ? (
										<Link href={cellTwo.link.href || cellTwo.link.route}>
											<h3 className='font-serif text-lg font-semibold text-pa-red-4'>
												{cellTwo.heading}
											</h3>
										</Link>
									) : (
										<h3 className='font-serif text-lg font-semibold text-pa-red-4'>
											{cellTwo?.heading}
										</h3>
									)}
									{cellTwo?.text ? (
										<PortableText
											content={cellTwo.text}
											serializers={serializers()}
										/>
									) : (
										null
									)}
								</td>
							</tr>
						</tbody>
					)
				})}
			</table>
		</div>
	)
}
