import { useDialog } from "react-aria";
import {useRef} from "react";

export function Dialog({  children, ...props }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { dialogProps } = useDialog(props, ref);

  return (
    <div {...dialogProps} ref={ref}>
      {children}
    </div>
  );
}