import React, { PropsWithChildren } from "react";
import { ContainerWrapper } from "./style";

export type ContainerProps = {};

export default function Container({
  children,
  ...props
}: PropsWithChildren<ContainerProps>) {
  return <ContainerWrapper {...props}>{children}</ContainerWrapper>;
}
