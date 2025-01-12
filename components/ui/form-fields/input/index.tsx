import React from "react";
import {
  Controller,
  FieldPath,
  FieldValues,
  PathValue,
  useFormContext,
} from "react-hook-form";
import { TextInputProps, TouchableHighlight, View } from "react-native";
import { Mask, useMaskedInputProps } from "react-native-mask-input";

import {
  ErrorContainer,
  ErrorMessage,
  InputBase,
  InputFieldContainer,
  Label,
} from "./styles";
import Icon from "../../icon";
import Tooltip from "../../tooltip";
import Text from "../../text";

interface InputFieldProps<TFieldValues extends FieldValues>
  extends TextInputProps {
  label?: string;
  tooltipIcon?: React.ReactNode;
  name: FieldPath<TFieldValues>;
  rightSlot?: React.ReactNode;
  wrapperWidth?: string;
  mask?: Mask;
  info?: string;
}

export function InputField<TFieldValues extends FieldValues>({
  label,
  name,
  tooltipIcon,
  rightSlot,
  wrapperWidth = "100%",
  mask,
  info,
  ...inputProps
}: InputFieldProps<TFieldValues>) {
  const { control, formState, watch, setValue } =
    useFormContext<TFieldValues>();

  const { errors } = formState;
  const errorMessage = errors[name]?.message as string | undefined;
  const [showPassword, setShowPassword] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const maskedInputProps = useMaskedInputProps({
    value: watch(name),
    onChangeText: (value) => {
      if (mask) {
        setValue(
          name,
          value as unknown as PathValue<TFieldValues, FieldPath<TFieldValues>>
        );
      }
    },
    mask,
  });

  return (
    <InputFieldContainer>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Label>{label}</Label>

        {info && (
          <Tooltip
            isVisible={showTooltip}
            onClose={() => setShowTooltip(false)}
            content={<Text>{info}</Text>}
          >
            <View>
              <Icon
                color="primary"
                onPress={() => setShowTooltip(true)}
                name="info-circle"
              />
            </View>
          </Tooltip>
        )}
      </View>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <InputBase
            onBlur={onBlur}
            onChangeText={(value) => {
              onChange(value);
              mask && maskedInputProps.onChangeText(value);
            }}
            value={value}
            {...inputProps}
            hasError={!!errorMessage}
            secureTextEntry={inputProps.secureTextEntry && !showPassword}
            ref={ref}
          />
        )}
      />
      {errorMessage && (
        <ErrorContainer>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorContainer>
      )}
    </InputFieldContainer>
  );
}
