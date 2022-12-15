import * as React from "react";
import { usePopover, DismissButton, Overlay } from "@react-aria/overlays";

export function Popover(props) {
  let ref = React.useRef(null);
  let { state, children } = props;

  let { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef: ref
    },
    state
  );

  return (
    <Overlay>
      <div {...underlayProps} className="relative inset-0" />
      <div
        {...popoverProps}
        ref={ref}
        className="absolute top-[78%] bg-white border left-[42%]  border-gray-300 w-auto shadow-lg mt-2 p-8 z-10"
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
