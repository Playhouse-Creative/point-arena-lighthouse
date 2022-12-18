import { useNumberFieldState } from 'react-stately'
import { useLocale, useNumberField } from 'react-aria'
import { useRef } from 'react'

// Reuse the Button from your component library. See below for details.
import Button from './Button'

type Props = {
	label: string
	value: number
	maxValue: number
	minValue: number
  onChange: (value: number) => void
}

const GuestPicker = (props: Props) => {
	const { locale } = useLocale()
	const state = useNumberFieldState({ ...props, locale })
	const inputRef = useRef<HTMLInputElement>(null)
	const {
		labelProps,
		groupProps,
		inputProps,
		incrementButtonProps,
		decrementButtonProps,
	} = useNumberField(props, state, inputRef)

	return (
		<div className='relative inline-flex flex-col text-center ml-4'>
			<label
				{...labelProps}
				className='mx-auto mb-1 w-full text-center text-lg text-gray-800'>
				{props.label}
			</label>
			<div {...groupProps} className='group flex shadow-lg'>
				<div className='relative flex justify-center border border-pa-navy-4 bg-white p-4 text-center transition-colors group-focus:border-pa-navy-4 group-hover:border-gray-400 group-focus:group-hover:border-pa-navy-4'>
					<Button {...decrementButtonProps} >-</Button>
					<input {...inputProps} ref={inputRef} className='text-center w-8 outline-none'/>
					<Button {...incrementButtonProps} >+</Button>
				</div>
			</div>
		</div>
	)
}

export default GuestPicker
