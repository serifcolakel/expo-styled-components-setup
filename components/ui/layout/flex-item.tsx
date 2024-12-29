import React from "react";
import styled from "styled-components/native";
import { ViewProps } from "react-native";
import { themeStyle, ThemeStyleUtilProps } from "@/utils/style.utils";

type FlexItemProps = {
  grow?: number;
  shrink?: number;
  basis?: string | number;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?:
    | "auto"
    | "flex-start"
    | "center"
    | "flex-end"
    | "stretch"
    | "baseline";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "stretch"
    | "space-between"
    | "space-around";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
} & ViewProps &
  ThemeStyleUtilProps;

const StyledFlexItem = styled.View<FlexItemProps>`
  flex-grow: ${({ grow }) => grow || 0};
  flex-shrink: ${({ shrink }) => shrink || 1};
  flex-basis: ${({ basis }) =>
    typeof basis === "number" ? `${basis}px` : basis || "auto"};
  align-self: ${({ align }) => align || "auto"};
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};

  ${({ ...props }) => themeStyle(props)};
`;

const FlexItem: React.FC<FlexItemProps> = ({ children, ...props }) => {
  return <StyledFlexItem {...props}>{children}</StyledFlexItem>;
};

export { FlexItem };
