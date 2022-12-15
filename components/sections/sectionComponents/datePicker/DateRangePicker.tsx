import { useRef } from 'react'
import { useDateRangePickerState } from 'react-stately'
import { useDateRangePicker } from 'react-aria'
import { FieldButton } from './Button'
import { RangeCalendar } from './RangeCalendar'
import { DateField } from './DateField'
import { Popover } from './Popover'
import { Dialog } from './Dialog'
import {
	CalendarIcon,
	ExclamationCircleIcon,
} from '@heroicons/react/24/outline'

export function DateRangePicker(props) {
	let state = useDateRangePickerState(props)
	let ref = useRef()
	let {
		groupProps,
		labelProps,
		startFieldProps,
		endFieldProps,
		buttonProps,
		dialogProps,
		calendarProps,
	} = useDateRangePicker(props, state, ref)

	return (
		<div className='relative inline-flex flex-col text-left'>
			<span {...labelProps} className='text-lg text-gray-800'>
				{props.label}
			</span>
			<div {...groupProps} ref={ref} className='group flex'>
				<div className='relative flex  border border-gray-300 bg-white p-1 pr-10 transition-colors group-focus-within:border-violet-600 group-hover:border-gray-400 group-focus-within:group-hover:border-violet-600'>
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
					<CalendarIcon className='h-5 w-5 text-gray-700 group-focus-within:text-violet-700' />
				</FieldButton>
			</div>
			{state.isOpen && (
				<Popover
					triggerRef={ref}
					state={state}
					placement='bottom start'>
					<Dialog {...dialogProps}>
						<RangeCalendar {...calendarProps} />
					</Dialog>
				</Popover>
			)}
		</div>
	)
}
