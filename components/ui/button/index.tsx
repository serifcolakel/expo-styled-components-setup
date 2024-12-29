import React, { PropsWithChildren } from "react";
import {
  ButtonContainer,
  buttonShapes,
  buttonSizes,
  buttonGap,
  buttonVariants,
  buttonTextVariants,
  ButtonText,
} from "./style";
import { ActivityIndicator, TouchableOpacity } from "react-native";

export type ButtonProps = {
  loading?: boolean;
  variant?: keyof typeof buttonVariants;
  textVariant?: keyof typeof buttonTextVariants;
  size?: keyof typeof buttonSizes;
  shape?: keyof typeof buttonShapes;
  gap?: keyof typeof buttonGap;
} & React.ComponentProps<typeof TouchableOpacity>;

export default function Button({
  children,
  variant = "primary",
  gap = "md",
  shape = "rounded",
  size = "sm",
  ...props
}: PropsWithChildren<ButtonProps>) {
  const isDisabled = props.disabled || props.loading;
  return (
    <ButtonContainer
      {...props}
      disabled={isDisabled}
      variant={variant}
      size={size}
      shape={shape}
      gap={gap}
    >
      {props.loading ? <ActivityIndicator /> : children}
    </ButtonContainer>
  );
}
