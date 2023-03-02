import React from 'react'
import PortableText from 'react-portable-text'

type Props = {
	rows: {
		title: string
		text: any
	}[]
	title: string
	id: { id: string }
	finePrint: any
}

export default function InfoRowsSection(props: Props) {
	return (
		<div className='mx-4 my-12' id={`${props.id ? props.id.id : null}`}>
			<h3
				className='mt-10
        ml-6 mb-8 text-center font-serif text-4xl font-semibold text-pa-navy-4'>
				{props.title}
			</h3>
			<div className='relative mx-auto mb-12 max-w-[1400px] border border-pa-navy-4 bg-white text-center shadow-lg transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
				<ul className='mx-2 my-8 flex flex-col justify-around sm:mx-12 sm:flex-row'>
					{props.rows.map((section, i: number) => (
						<li key={i} className='mt-2 mb-6 flex flex-col'>
							<h3 className='mb-2 text-center font-serif text-2xl font-semibold text-pa-red-4 underline'>
								{section.title}
							</h3>
							<div className='text-center text-lg text-pa-navy-4'>
								<PortableText
									content={section.text}
									key={i}
									serializers={{
										li: ({ children }: any) => (
											<li className='list-inside list-disc'>
												{children}
											</li>
										),
										ol: ({ children }: any) => (
											<ol className='mt-lg'>
												{children}
											</ol>
										),
										link: ({ href, children }: any) => (
											<a
												className='text-pa-teal-4 underline'
												href={href}>
												{children}
											</a>
										),
									}}
								/>
							</div>
						</li>
					))}
				</ul>
				<div className='mb-3 text-pa-navy-4'>
					<PortableText
						content={props.finePrint}
						serializers={{
							li: ({ children }: any) => (
								<li className='list-inside list-disc'>
									{children}
								</li>
							),
							ol: ({ children }: any) => (
								<ol className='mt-lg'>{children}</ol>
							),
							link: ({ href, children }: any) => (
								<a
									className='text-pa-teal-4 underline'
									href={href}>
									{children}
								</a>
							),
						}}
					/>
				</div>
			</div>
		</div>
	)
}
