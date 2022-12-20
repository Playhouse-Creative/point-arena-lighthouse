import { useState } from 'react'
import { DateRangePicker } from './sectionComponents/datePicker/DateRangePicker'
import { today, getLocalTimeZone } from '@internationalized/date'
import GuestPicker from './sectionComponents/guestPicker/GuestPicker'
import { SSRProvider } from 'react-aria'
import  AvailabilityButton  from './sectionComponents/AvailabilityButton'

type Props = {
    title: string
    
}

export default function DatePickerSection( props : Props) {
    const [adultValue, setAdultValue] = useState<number>(1)
    const [childValue, setChildValue] = useState<number>(1)
	return (
		<SSRProvider>
			<div className='mb-20'>
				<h2 className='mb-8 w-full text-center font-serif text-4xl font-semibold '>
					{props.title}
				</h2>
				<div className='mx-auto flex justify-center'>
                <DateRangePicker
					label='Stay dates'
					minValue={today(getLocalTimeZone())}
				/>
					<GuestPicker
						label='Adults'
                        value={adultValue}
                        maxValue={8}
                        minValue={1}
                        onChange={setAdultValue}
					/>
                    <GuestPicker
						label='Children'
                        value={childValue}
                        maxValue={8}
                        minValue={0}
                        onChange={setChildValue}
					/>
                    <AvailabilityButton/>
				</div>
			</div>
		</SSRProvider>
	)
}
