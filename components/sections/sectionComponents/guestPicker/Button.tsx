import { useButton } from 'react-aria'
import { useRef } from 'react'

const Button = (props) => {
	const ref = useRef()
	const { buttonProps, isPressed } = useButton(props, ref);
	return (
		<button
    {...buttonProps}
      ref={ref}
      className={`px-2 -ml-px h-full transition-colors group-focus-within:border-pa-navy-4 group-focus-within:group-hover:border-pa-navy-4 outline-none ${
        isPressed || props.isPressed
          ? "bg-gray-200 border-pa-navy-4"
          : "bg-white border-pa-navy-4 group-hover:border-gray-400"
      }`}>
			{props.children}
		</button>
	)
}

export default Button
