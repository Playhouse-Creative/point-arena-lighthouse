'use client'

import { I18nProvider, SSRProvider, useLocale } from 'react-aria'
import { DateRangePicker } from './sectionComponents/datePicker/DateRangePicker'
import { today, getLocalTimeZone } from '@internationalized/date'

type Props = {}

export default function DatePickerSection({}: Props) {
	const { locale } = useLocale()
	return (
		<SSRProvider>
			<I18nProvider locale={locale}>
				<div className='h-[100vh] flex mx-auto justify-center'>
					<DateRangePicker
						label='Stay dates'
						minValue={today(getLocalTimeZone())}
					/>
				</div>
			</I18nProvider>
		</SSRProvider>
	)
}
