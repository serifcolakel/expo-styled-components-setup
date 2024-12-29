import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { ContainerProps } from ".";
import { themeStyle } from "@/utils/style.utils";

export const ContainerWrapper = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${({ ...props }) => themeStyle(props)};
`;
