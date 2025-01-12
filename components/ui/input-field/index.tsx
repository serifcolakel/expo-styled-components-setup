import React from "react";
import {
  Controller,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { TextInputProps, View } from "react-native";
import styled from "styled-components/native";

const InputContainer = styled.View`
  width: 100%;
`;

const LabelContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;

const TooltipIconContainer = styled.TouchableOpacity`
  padding: 4px;
`;

const InputBaseContainer = styled(View)`
  display: flex;
  flex-direction: row;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 8px;
`;

const InputBase = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => `${theme.fontSizes.base}px`};
  color: ${({ theme }) => theme.colors.primary};
  height: ${({ theme }) => `${theme.inputSizes.base}px`};
  width: 100%;
  border: none;
`;

const IconContainer = styled.View`
  padding: 4px;
`;

const ErrorContainer = styled(View)`
  margin-top: ${({ theme }) => `${theme.spacing.padding.sm}px`};
`;

const ErrorMessage = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
`;

interface StyledInputProps<TFieldValues extends FieldValues>
  extends TextInputProps {
  label: string;
  tooltipIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errorIcon?: React.ReactNode;
  name: FieldPath<TFieldValues>;
}

export function StyledInput<TFieldValues extends FieldValues>({
  label,
  name,
  tooltipIcon,
  leftIcon,
  rightIcon,
  errorIcon,
  ...inputProps
}: StyledInputProps<TFieldValues>) {
  const { control, formState } = useFormContext<TFieldValues>();
  const { errors } = formState;
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <InputContainer>
      <LabelContainer>
        <Label>{label}</Label>
        {tooltipIcon && (
          <TooltipIconContainer>{tooltipIcon}</TooltipIconContainer>
        )}
      </LabelContainer>

      <InputBaseContainer>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputBase
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              {...inputProps}
            />
          )}
        />
        {rightIcon && <IconContainer>{rightIcon}</IconContainer>}
      </InputBaseContainer>

      {(errorMessage || errorIcon) && (
        <ErrorContainer>
          {errorIcon && <IconContainer>{errorIcon}</IconContainer>}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </ErrorContainer>
      )}
    </InputContainer>
  );
}
