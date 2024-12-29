import { Platform } from "react-native";

export const getPlatform = () => {
  return Platform.OS;
};

export const isAndroid = () => {
  return getPlatform() === "android";
};

export const isIOS = () => {
  return getPlatform() === "ios";
};

export const isWeb = () => {
  return getPlatform() === "web";
};
