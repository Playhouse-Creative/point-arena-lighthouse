
import { useButton } from 'react-aria'
import { useRef } from 'react'




const AvailabilityButton = (props:any) => {
	const ref = useRef<HTMLButtonElement>(null)
	const { buttonProps, isPressed } = useButton(props, ref)
	return (
		<button
			{...buttonProps}
			ref={ref}
			className={`min-w-[240px] md:ml-8 px-6 py-4 text-lg mt-2 md:mt-0 text-white shadow-lg outline-none transition-colors group-focus-within:border-pa-navy-4 group-focus-within:group-hover:border-pa-navy-4 ${
				isPressed || props.isPressed
					? 'scale-95 bg-pa-red-3'
					: 'bg-pa-red-4 '
			}`}>
			{props.children}Check Availability
		</button>
	)
}

export default AvailabilityButton
