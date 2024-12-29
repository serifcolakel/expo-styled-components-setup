import theme from "@/themes";
import { themeStyle, ThemeStyleUtilProps } from "@/utils/style.utils";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import styled from "styled-components/native";

type TextProps = {
  variant?: keyof typeof theme.fontSizes;
  weight?: keyof typeof theme.weights;
  color?: keyof typeof theme.colors;
} & RNTextProps &
  ThemeStyleUtilProps;

const Text = styled(RNText)<TextProps>`
  font-size: ${({ variant }) => theme.fontSizes[variant || "base"]}px;
  font-weight: ${({ weight }) => theme.weights[weight || "regular"]};
  color: ${({ color }) => theme.colors[color || "text"]};
  font-family: "JosefinSans";

  ${({ ...props }) => themeStyle(props)};
`;

export default Text;
