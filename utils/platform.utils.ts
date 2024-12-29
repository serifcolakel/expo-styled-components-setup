import { Platform } from "react-native";
import { height, width } from "./screen.utils";

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

export const isMacOS = () => {
  return getPlatform() === "macos";
};

export const isWindows = () => {
  return getPlatform() === "windows";
};

export const isPortrait = () => {
  return height >= width;
};

export const isLandscape = () => {
  return width > height;
};
