import { useState } from 'react'
import { DateRangePicker } from './sectionComponents/datePicker/DateRangePicker'
import { today, getLocalTimeZone } from '@internationalized/date'
import GuestPicker from './sectionComponents/guestPicker/GuestPicker'
import { SSRProvider } from 'react-aria'
import AvailabilityButton from './sectionComponents/AvailabilityButton'
import Script from 'next/script'

type Props = {
	title: string
	linkId: {linkId: {current: string}}
}

export default function DatePickerSection(props: Props) {
	const [adultValue, setAdultValue] = useState<number>(1)
	return (
		<>
		<SSRProvider>
			<div className='mx-4 mb-20 scroll-mt-96' id={`${props.linkId ? props.linkId.linkId.current : null}`} >
				<h2 className='mb-8 w-full text-center font-serif text-4xl font-semibold '>
					{props.title}
				</h2>
				<div className='flex flex-col sm:items-end justify-center sm:flex-row'>
					<DateRangePicker
						label='Stay dates'
						minValue={today(getLocalTimeZone())}
					/>
					<div className='flex items-end mt-2 justify-around sm:ml-4'>
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
			{/* <Script type="text/javascript" src="https://be-booking-engine-api.prodinnroad.com/widget/pointarenalighthouse"></Script>
		<div id="innroad-widget"></div> */}
		</SSRProvider>
		
		</>
	)
}
