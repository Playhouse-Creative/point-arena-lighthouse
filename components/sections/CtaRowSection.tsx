import CtaRow from './sectionComponents/CtaRow'

type Props = {
    rows: any[]
	props: any
}

export default function CtaRowSection(props: Props) {
	const { rows } = props
	return (
		<div  className='h-full my-24'>
			{rows.map((row: any, i: number) => (
				<CtaRow
					key={i}
					bannerColor={i % 2 == 0 ? '#0088A7' : '#054F73'}
					{...row}
				/>
			))}
		</div>
	)
}
