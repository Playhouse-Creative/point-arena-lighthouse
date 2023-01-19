import { useRef } from 'react'
import { useDateRangePickerState } from 'react-stately'
import { useDateRangePicker, Overlay } from 'react-aria'
import { FieldButton } from './Button'
import { RangeCalendar } from './RangeCalendar'
import { DateField } from './DateField'
import { Popover } from './Popover'
import { Dialog } from './Dialog'
import {
	CalendarIcon,
	ExclamationCircleIcon,
} from '@heroicons/react/24/outline'



export function DateRangePicker(props: any) {
	const state = useDateRangePickerState(props)
	const ref = useRef<HTMLDivElement>(null)
	const {
		groupProps,
		labelProps,
		startFieldProps,
		endFieldProps,
		buttonProps,
		dialogProps,
		calendarProps,
	} = useDateRangePicker(props, state, ref)

	

	return (
		<div className='relative inline-flex flex-col text-left sm:mx-0 w-9/12 sm:w-80 mx-auto'>
			<span
				{...labelProps}
				className='mx-auto mb-1 w-full text-center text-lg text-gray-800'>
				{props.label}
			</span>
			<div {...groupProps} ref={ref} className='group flex'>
				<div className='relative flex w-full justify-center border border-pa-navy-4 bg-white p-4 text-center transition-colors group-focus-within:border-pa-navy-4 group-hover:border-gray-400 group-focus-within:group-hover:border-pa-navy-4'>
					<DateField {...startFieldProps} />
					<span aria-hidden='true' className='px-2'>
						–
					</span>
					<DateField {...endFieldProps} />
					{state.validationState === 'invalid' && (
						<ExclamationCircleIcon className='absolute right-1 h-6 w-6 text-red-500' />
					)}
				</div>
				<FieldButton {...buttonProps} isPressed={state.isOpen}>
					<CalendarIcon className='h-5 w-5 text-gray-700 group-focus-within:text-pa-teal-4' />
				</FieldButton>
			</div>
			{state.isOpen && (
				
					<Popover
						triggerRef={ref}
						state={state}
						placement='bottom start'
						>
						<Dialog {...dialogProps}>
							<RangeCalendar {...calendarProps} />
						</Dialog>
					</Popover>
				
			)}
		</div>
	)
}
