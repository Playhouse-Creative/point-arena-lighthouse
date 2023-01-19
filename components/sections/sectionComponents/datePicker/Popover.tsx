import * as React from 'react'
import { usePopover, DismissButton } from '@react-aria/overlays'
import {  Overlay } from 'react-aria'

export function Popover(props: any) {
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
		
				
				<div
					{...popoverProps}
					ref={ref}
					className='absolute z-10 mt-2 w-auto border border-gray-300 bg-white p-8 shadow-lg'
					>
					<DismissButton onDismiss={state.close} />
					{children}
					<DismissButton onDismiss={state.close} />
				</div>
		
	)
}
