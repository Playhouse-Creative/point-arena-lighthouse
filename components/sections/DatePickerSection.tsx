import { useState } from 'react'
import { DateRangePicker } from './sectionComponents/datePicker/DateRangePicker'
import { today, getLocalTimeZone } from '@internationalized/date'
import GuestPicker from './sectionComponents/guestPicker/GuestPicker'
import { SSRProvider } from 'react-aria'
import AvailabilityButton from './sectionComponents/AvailabilityButton'

type Props = {
	title: string
}

export default function DatePickerSection(props: Props) {
	const [adultValue, setAdultValue] = useState<number>(1)
	return (
		<SSRProvider>
			<div className='mx-4 mb-20'>
				<h2 className='mb-8 w-full text-center font-serif text-4xl font-semibold '>
					{props.title}
				</h2>
				<div className='flex flex-col sm:items-end justify-center sm:flex-row'>
					<DateRangePicker
						label='Stay dates'
						minValue={today(getLocalTimeZone())}
					/>
					<div className='flex items-end mt-2 justify-center ml-4'>
						<GuestPicker
							label='# of Adults'
							value={adultValue}
							maxValue={8}
							minValue={1}
							onChange={setAdultValue}
						/>
						<AvailabilityButton />
					</div>
				</div>
			</div>
		</SSRProvider>
	)
}
