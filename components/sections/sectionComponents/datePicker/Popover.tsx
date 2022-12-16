import * as React from 'react'
import { usePopover, DismissButton, Overlay } from '@react-aria/overlays'

export function Popover(props) {
	const ref = React.useRef(null)
	const { state, children } = props

	const { popoverProps, underlayProps } = usePopover(
		{
			...props,
			popoverRef: ref,
		},
		state
	)

	return (
		<>
			<Overlay>
				<div {...underlayProps} className='relative inset-0' />
				<div
					{...popoverProps}
					ref={ref}
					className='absolute top-[87%] left-[40.5%] z-10 mt-2 w-auto border border-gray-300 bg-white p-8 shadow-lg'>
					<DismissButton onDismiss={state.close} />
					{children}
					<DismissButton onDismiss={state.close} />
				</div>
			</Overlay>
		</>
	)
}
