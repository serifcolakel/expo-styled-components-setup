import { MediaQuery } from "@/utils/media.utils";
import { TextInput, View } from "react-native";
import styled from "styled-components/native";
import Text from "../../text";

export const InputFieldContainer = styled.View`
  width: 100%;
  flex: ${MediaQuery.select({
    ios: "1",
    android: "1",
    web: "auto",
  })};
`;

export const Label = styled(Text).attrs({
  variant: "base",
  color: "primary",
})`
  text-align: left;
`;

export const InputBase = styled(TextInput).attrs({
  placeholderTextColor: "lightgrey",
})<{ hasError: boolean }>`
  font-size: ${({ theme }) => `${theme.fontSizes.base}px`};
  color: ${({ theme, hasError }) =>
    hasError ? theme.colors.error : theme.colors.text};
  flex: 1;

  border: ${({ hasError }) => (hasError ? "1px solid red" : "1px solid black")};
  border-radius: ${({ theme }) => `${theme.radius.md}px`};
  padding: ${({ theme }) => `${theme.spacing.padding.sm}px`};

  outline-width: 0;

  ${({ theme }) =>
    MediaQuery.select({
      ios: `
        height: ${theme.inputSizes.base}px;
      `,
      android: `
        height: ${theme.inputSizes.md}px;
      `,
      web: `
        height: ${theme.inputSizes.base}px;
        &::placeholder {
          color: ${theme.colors.overlay};
        }
      `,
    })};

  &:placeholder {
    color: ${({ theme }) => theme.colors.overlay};
  }
`;

export const ErrorContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const ErrorMessage = styled(Text).attrs({
  variant: "sm",
  color: "error",
})`
  margin-top: ${({ theme }) => `${theme.spacing.padding.xs}px`};
  margin-bottom: ${({ theme }) => `${theme.spacing.padding.xs}px`};
`;
