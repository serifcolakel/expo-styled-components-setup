import React, { ComponentProps, PropsWithChildren } from "react";
import { ContainerWrapper } from "./style";
import { ScrollView } from "react-native";
import { ThemeStyleUtilProps } from "@/utils/style.utils";

export type ContainerProps = {
  scrollable?: boolean;
  scrollViewProps?: ComponentProps<typeof ScrollView>;
} & ThemeStyleUtilProps;

export default function Container({
  children,
  scrollable = false,
  scrollViewProps,
  ...props
}: PropsWithChildren<ContainerProps>) {
  if (scrollable) {
    return (
      <ScrollView {...scrollViewProps}>
        <ContainerWrapper {...props}>{children}</ContainerWrapper>
      </ScrollView>
    );
  }

  return <ContainerWrapper {...props}>{children}</ContainerWrapper>;
}
