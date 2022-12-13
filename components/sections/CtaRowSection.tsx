import CtaRow from './sectionComponents/CtaRow'

type Props = {
	props: [rows: any]
}

export default function CtaRowSection(props: Props) {
	const { rows } = props
	return (
		<div className='h-full'>
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
