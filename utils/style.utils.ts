import { AppTheme } from "@/themes/theme";
import { css } from "styled-components/native";

export type ThemeStyleUtilProps = {
  p?: keyof AppTheme["spacing"]["padding"];
  m?: keyof AppTheme["spacing"]["margin"];
  px?: keyof AppTheme["spacing"]["padding"];
  py?: keyof AppTheme["spacing"]["padding"];
  mx?: keyof AppTheme["spacing"]["margin"];
  my?: keyof AppTheme["spacing"]["margin"];
  rounded?: keyof AppTheme["radius"];
  bg?: keyof AppTheme["colors"];

  fontSize?: keyof AppTheme["sizes"];
  textAlign?: keyof AppTheme["align"];
  weight?: keyof AppTheme["weights"];

  opacity?: keyof AppTheme["opacity"];
};

export const themeStyle = ({
  bg,
  fontSize,
  textAlign,
  weight,
  p,
  m,
  px,
  py,
  mx,
  my,
  rounded,
  opacity,
}: ThemeStyleUtilProps & { theme: AppTheme }) => {
  return css`
    ${({ theme }) => p && `padding: ${theme.spacing.padding[p]}px;`}
    ${({ theme }) => px && `padding-left: ${theme.spacing.padding[px]}px;`}
    ${({ theme }) => px && `padding-right: ${theme.spacing.padding[px]}px;`}
    ${({ theme }) => py && `padding-top: ${theme.spacing.padding[py]}px;`}
    ${({ theme }) => py && `padding-bottom: ${theme.spacing.padding[py]}px;`}

    ${({ theme }) => m && `margin: ${theme.spacing.margin[m]}px;`}
    ${({ theme }) => mx && `margin-left: ${theme.spacing.margin[mx]}px;`}
    ${({ theme }) => mx && `margin-right: ${theme.spacing.margin[mx]}px;`}
    ${({ theme }) => my && `margin-top: ${theme.spacing.margin[my]}px;`}
    ${({ theme }) => my && `margin-bottom: ${theme.spacing.margin[my]}px;`}

    ${({ theme }) => rounded && `border-radius: ${theme.radius[rounded]}px;`}
    ${({ theme }) => bg && `background-color: ${theme.colors[bg]};`}
    ${({ theme }) => fontSize && `font-size: ${theme.sizes[fontSize]}px;`}
    ${({ theme }) => textAlign && `text-align: ${theme.align[textAlign]};`}
    ${({ theme }) => weight && `font-weight: ${theme.weights[weight]};`}
    ${({ theme }) =>
      opacity &&
      `opacity: ${theme.opacity[opacity as keyof typeof theme.opacity]};`}
  `;
};
