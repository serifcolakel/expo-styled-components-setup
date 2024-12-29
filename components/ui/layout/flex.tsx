import React from "react";
import styled from "styled-components/native";
import { ViewProps } from "react-native";
import { AppTheme } from "@/themes/theme";
import { themeStyle, ThemeStyleUtilProps } from "@/utils/style.utils";

type FlexProps = {
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  grow?: number;
  shrink?: number;
  basis?: string | number;
  gap?: keyof AppTheme["spacing"]["gap"];
  bg?: keyof AppTheme["colors"];
} & ViewProps &
  ThemeStyleUtilProps;

const StyledFlex = styled.View<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  flex-grow: ${({ grow }) => grow || 0};
  flex-shrink: ${({ shrink }) => shrink || 1};
  flex-basis: ${({ basis }) =>
    typeof basis === "number" ? `${basis}px` : basis || "auto"};
  gap: ${({ gap, theme }) => theme.spacing.gap[gap || "none"]}px;
  background-color: ${({ bg, theme }) => theme.colors[bg || "transparent"]};

  ${({ ...props }) => themeStyle(props)};
`;

const Flex: React.FC<FlexProps> = ({ children, ...props }) => {
  return <StyledFlex {...props}>{children}</StyledFlex>;
};

export { Flex };
