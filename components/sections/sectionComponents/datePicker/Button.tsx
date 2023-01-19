import { useRef } from "react";
import { useButton, useFocusRing, mergeProps } from "react-aria";

type Props ={
    isDisabled: boolean
    children: any
    isPressed: boolean
}

export function CalendarButton(props: any) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={`p-2 rounded-full ${props.isDisabled ? "text-gray-400" : ""} ${
        !props.isDisabled ? "hover:bg-pa-teal-1 active:bg-pa-teal-2" : ""
      } outline-none ${
        isFocusVisible ? "ring-2 ring-offset-2 ring-pa-teal-4" : ""
      }`}
    >
      {props.children}
    </button>
  );
}

export function FieldButton(props: any) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`px-2  -ml-px border transition-colors group-focus-within:border-pa-navy-4 group-focus-within:group-hover:border-pa-navy-4 outline-none ${
        isPressed 
          ? "bg-gray-200 border-pa-navy-4"
          : "bg-gray-50 border-pa-navy-4 group-hover:border-gray-400"
      }`}
    >
      {props.children}
    </button>
  );
}
