import { useRef, useEffect } from "react";
import { useDateFieldState } from "react-stately";
import { useDateField, useDateSegment, useLocale } from "react-aria";
import { createCalendar } from "@internationalized/date";

export function DateField(props: any) {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });

  const ref = useRef<HTMLDivElement>(null);;
  const {  fieldProps } = useDateField(props, state, ref);

  return (
    <div {...fieldProps} ref={ref} className="flex ">
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  );
}

function DateSegment({ segment, state }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
        minWidth:
          segment.maxValue && String(segment.maxValue).length + "ch",

      }}
      className={` outline-none box-content focus:bg-pa-teal-4 focus:text-white group ${
        !segment.isEditable ? "text-gray-500" : "text-gray-800"
      }`}
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
      <span
        aria-hidden="true"
        className="block w-full text-center italic text-gray-500 group-focus:text-white"
        style={{
          visibility: segment.isPlaceholder ? "visible" : "hidden",
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