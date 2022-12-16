import { useRef } from "react";
import { useDateFieldState } from "react-stately";
import { useDateField, useDateSegment, useLocale } from "react-aria";
import { createCalendar } from "@internationalized/date";

export function DateField(props) {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });

  const ref = useRef();
  const { fieldProps } = useDateField(props, state, ref);

  return (
    <div {...fieldProps} ref={ref} className="flex ">
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  );
}

function DateSegment({ segment, state }) {
  const ref = useRef();
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
        // minWidth:
        //   segment.maxValue != null && String(segment.maxValue).length + "ch",

      }}
      className={` outline-none  focus:bg-pa-teal-4 focus:text-white group ${
        !segment.isEditable ? "text-gray-500" : "text-gray-800"
      }`}
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
      <span
        aria-hidden="true"
        style={{
          display: segment.isPlaceholder ? "block" : "none",
           height: 0,
          pointerEvents: "none"
        }}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? "" : segment.text}
    </div>
  );
}