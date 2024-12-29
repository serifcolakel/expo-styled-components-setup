import styled from "styled-components/native";
import { css } from "styled-components/native";
import { ButtonProps } from ".";
import { Text } from "react-native";

export const buttonVariants = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary};
  `,
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success};
  `,
  warning: css`
    background-color: ${({ theme }) => theme.colors.warning};
  `,
  error: css`
    background-color: ${({ theme }) => theme.colors.errorLight};
  `,
  info: css`
    background-color: ${({ theme }) => theme.colors.info};
  `,
  link: css`
    background-color: ${({ theme }) => theme.colors.info};
  `,
} as const;

export const buttonTextVariants = {
  default: css`
    color: ${({ theme }) => theme.colors.white};
  `,
  primary: css`
    color: ${({ theme }) => theme.colors.white};
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.white};
  `,
  success: css`
    color: ${({ theme }) => theme.colors.white};
  `,
  warning: css`
    color: ${({ theme }) => theme.colors.white};
  `,
  error: css`
    color: ${({ theme }) => theme.colors.white};
  `,
  info: css`
    color: ${({ theme }) => theme.colors.white};
  `,
  link: css`
    color: ${({ theme }) => theme.colors.white};
  `,
} as const;

export const buttonSizes = {
  sm: css`
    padding: ${({ theme }) => theme.spacing.padding.sm}px;
  `,
  md: css`
    padding: ${({ theme }) => theme.spacing.padding.md}px;
  `,
  lg: css`
    padding: ${({ theme }) => theme.spacing.padding.lg}px;
  `,
  xl: css`
    padding: ${({ theme }) => theme.spacing.padding.xl}px;
  `,
};

export const buttonShapes = {
  square: css`
    border-radius: 0;
  `,
  rounded: css`
    border-radius: ${({ theme }) => theme.radius.sm}px;
  `,
  roundedLg: css`
    border-radius: ${({ theme }) => theme.radius.lg}px;
  `,
  circular: css`
    border-radius: 50%;
  `,
};

export const buttonGap = {
  sm: css`
    gap: ${({ theme }) => theme.spacing.gap.md}px;
  `,
  md: css`
    gap: ${({ theme }) => theme.spacing.gap.md}px;
  `,
  lg: css`
    gap: ${({ theme }) => theme.spacing.gap.lg}px;
  `,
  xl: css`
    gap: ${({ theme }) => theme.spacing.gap.xl}px;
  `,
};

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  ${({ variant, size, shape, gap }) => css`
    ${buttonVariants[variant || "primary"]}
    ${buttonSizes[size || "sm"]}
    ${buttonShapes[shape || "rounded"]}
    ${buttonGap[gap || "md"]}
  `}

  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled, loading }) =>
    disabled || loading ? "not-allowed" : "pointer"};
  opacity: ${({ disabled, loading, theme }) =>
    disabled || loading ? theme.opacity.base : theme.opacity.full};
`;

export const ButtonText = styled(Text)<ButtonProps>`
  ${({ textVariant }) => css`
    ${buttonTextVariants[textVariant || "primary"]}
  `}
`;
