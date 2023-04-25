import React from 'react'
import PortableText from 'react-portable-text'
import serializers from '../../lib/portableText-serializers'

type Props = {
	columns: any
	listType: any
	title: string
	cell: { heading: string; text: any }[]
	heading: string
	text: any
	linkId: {  slug: { current: string } } 
}

export default function TableSection(props: Props) {
	const columnRows = props.columns.columnOne.columnCells

	return (
		<div
			id={`${props.linkId ? props.linkId.slug.current.split('#')[1] : null}`}
			className='mx-4 my-12 scroll-mt-96'>
			
			<h3
				className='mt-10
        ml-6 mb-8 text-center font-serif text-4xl font-semibold text-pa-navy-4'>
				{props.title}
			</h3>
			<table className='relative mx-auto mb-12 w-full max-w-[1400px] border border-pa-navy-4 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
				<thead>
					<tr className='flex justify-start bg-pa-navy-4 py-1 font-serif text-lg uppercase text-white'>
						<th className='ml-8 w-1/2 text-left'>
							{props.columns.columnOne.columnHeader}
						</th>
						<th className='ml-8 w-1/2 text-left'>
							{props.columns.columnTwo.columnHeader}
						</th>
					</tr>
				</thead>
				{props.columns.columnOne.columnCells.map(
					(cell: Props, i: number) => (
						<tbody key={i}>
							<tr className='flex justify-start border-b-[1px] border-pa-blue-4 bg-white py-4'>
								<td className='mx-2 flex w-1/2 flex-col flex-wrap text-left sm:mx-10'>
									<h3 className='font-serif text-lg font-semibold text-pa-red-4'>
										{cell.heading}
									</h3>
									{props.columns.columnOne.columnCells[i]
										.text && (
										<PortableText
											content={
												props.columns.columnOne
													.columnCells[i].text
											}
											serializers={serializers()}
										/>
									)}
								</td>
								<td className='mx-2 flex w-1/2 flex-col flex-wrap text-left sm:mx-10'>
									<h3 className='font-serif text-lg font-semibold text-pa-red-4'>
										{
											props.columns.columnTwo.columnCells[
												i
											].heading
										}
									</h3>
									{props.columns.columnTwo.columnCells[i]
										.text && (
										<PortableText
											content={
												props.columns.columnTwo
													.columnCells[i].text
											}
											serializers={serializers()}
										/>
									)}
								</td>
							</tr>
						</tbody>
					)
				)}
			</table>
		</div>
	)
}
