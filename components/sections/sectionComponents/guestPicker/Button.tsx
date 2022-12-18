import { useButton } from 'react-aria'
import { useRef } from 'react'
import { AnySrvRecord } from 'dns'

type Props = {
  
  children: any
}

const Button = (props: Props) => {
	const ref = useRef<HTMLButtonElement>(null)
	const { buttonProps, isPressed } = useButton(props, ref);
	return (
		<button
    {...buttonProps}
      ref={ref}
      className={`text-gray-700 px-2 -ml-px h-full transition-colors group-focus-within:border-pa-navy-4 group-focus-within:group-hover:border-pa-navy-4 outline-none ${
        isPressed
          ? "bg-gray-200 border-pa-navy-4"
          : "bg-white border-pa-navy-4 group-hover:border-gray-400"
      }`}>
			{props.children}
		</button>
	)
}

export default Button

