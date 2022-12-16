import { useDialog } from "react-aria";
import React from "react";

export function Dialog({  children, ...props }) {
  const ref = React.useRef();
  const { dialogProps } = useDialog(props, ref);

  return (
    <div {...dialogProps} ref={ref}>
      {children}
    </div>
  );
}