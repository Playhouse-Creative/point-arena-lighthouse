import { useState } from 'react'
import { DateRangePicker } from './sectionComponents/datePicker/DateRangePicker'
import { today, getLocalTimeZone } from '@internationalized/date'
import GuestPicker from './sectionComponents/guestPicker/GuestPicker'
import { SSRProvider } from 'react-aria'
import AvailabilityButton from './sectionComponents/AvailabilityButton'
import Script from 'next/script'

type Props = {
	title: string
	linkId: { slug: { current: string } }
}

export default function DatePickerSection(props: Props) {
	const [adultValue, setAdultValue] = useState<number>(1)
	const [kidValue, setKidValue] = useState<number>(1)
	return (
		<>
			<SSRProvider>
				<div
					className='mx-4 mb-20 scroll-mt-96'
					id={`${props.linkId ? props.linkId.slug.current : null}`}>
					<h2 className='mb-8 w-full text-center font-serif text-4xl font-semibold '>
						{props.title}
					</h2>
					<div className='flex flex-col justify-center md:flex-row md:items-end'>
						<DateRangePicker
							label='Stay dates'
							minValue={today(getLocalTimeZone())}
						/>
						<div className='mt-2 flex flex-col md:flex-row items-center md:items-end justify-around md:ml-4'>
							<div className='flex gap-3 justify-center w-full mx-auto mb-4 md:mb-0'>
							<GuestPicker
								label='# of Adults'
								value={adultValue}
								maxValue={8}
								minValue={1}
								onChange={setAdultValue}
							/>
							<GuestPicker
								label='# of Kids'
								value={kidValue}
								maxValue={8}
								minValue={1}
								onChange={setKidValue}
							/></div>
							<AvailabilityButton />
						</div>
					</div>
				</div>
				{/* <div className='mx-auto mb-12 flex justify-center'>
					<Script
						type='text/javascript'
						src='https://be-booking-engine-api.prodinnroad.com/widget/pointarenalighthouse'></Script>
					<div id='innroad-widget'></div>
				</div> */}
			</SSRProvider>
		</>
	)
}
