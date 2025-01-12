import React, { PropsWithChildren } from "react";
import BaseTooltip, { TooltipProps } from "react-native-walkthrough-tooltip";

type Props = {} & TooltipProps;

export default function Tooltip({
  children,
  ...tooltipProps
}: PropsWithChildren<Props>) {
  return <BaseTooltip {...tooltipProps}>{children}</BaseTooltip>;
}
