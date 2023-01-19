import React from 'react'
import PortableText from 'react-portable-text'

type Props = {
	columns: any
	listType: any
	title: string
}

export default function TableSection(props: Props) {
	return (
		<div className='mx-4 my-12'>
			<h3
				className='mt-10
        ml-6 mb-8 text-center font-serif text-4xl font-semibold text-pa-navy-4'>
				{props.title}
			</h3>
			<table className='relative mx-auto mb-12 w-full max-w-[1400px] border border-pa-navy-4 text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
				<thead >
					<tr className='flex justify-start bg-pa-navy-4 py-1 font-serif text-lg uppercase text-white'>
						<th className='ml-8 w-1/2 text-left'>
							{props.columns.columnOne.columnHeader}
						</th>
						<th className='ml-8 w-1/2 text-left'>
							{props.columns.columnTwo.columnHeader}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className='flex justify-start border-b-[1px] border-pa-blue-4 bg-white py-4'>
						<td className='mx-2 sm:mx-10 flex w-1/2 flex-col flex-wrap text-left'>
							<h3 className='font-serif text-lg font-semibold text-pa-red-4'>
								{props.columns.columnOne.columnCells[0].heading}
							</h3>
							<PortableText
								content={
									props.columns.columnOne.columnCells[0].text
								}
							/>
						</td>
						<td className='mx-2 sm:mx-10 flex w-1/2 flex-col flex-wrap text-left'>
							<h3 className='font-serif text-lg font-semibold text-pa-red-4'>
								{props.columns.columnTwo.columnCells[0].heading}
							</h3>
							<PortableText
								content={
									props.columns.columnTwo.columnCells[0].text
								}
							/>
						</td>
					</tr>
					<tr className='flex justify-start border-b-[1px] border-pa-blue-4 bg-white py-4'>
						<td className='mx-2 sm:mx-10 flex w-1/2 flex-col flex-wrap text-left'>
							<h3 className='font-serif text-lg font-semibold text-pa-red-4'>
								{props.columns.columnOne.columnCells[1].heading}
							</h3>
							<PortableText
								content={
									props.columns.columnOne.columnCells[1].text
								}
							/>
						</td>
						<td className='mx-2 sm:mx-10 flex w-1/2 flex-col flex-wrap text-left'>
							<h3 className='font-serif text-lg font-semibold text-pa-red-4'>
								{props.columns.columnTwo.columnCells[1].heading}
							</h3>
							<PortableText
								content={
									props.columns.columnTwo.columnCells[1].text
								}
							/>
						</td>
					</tr>
				</tbody>
				{/* {console.log(props)} */}
				{/* {props.columns.map((section: any, i: number) => (
						<li key={i} className='mt-2 mb-6 flex flex-col'>
							<h3 className='text-center font-serif text-2xl font-semibold text-pa-red-4 underline'>
								{section.title}
							</h3>
							<div className='text-center text-lg text-pa-navy-4'>
								<PortableText content={section.text} key={i} />
							</div>
						</li>
					))} */}
			</table>
		</div>
	)
}
