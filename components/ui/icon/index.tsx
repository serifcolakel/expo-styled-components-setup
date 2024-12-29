import React from "react";
import { type ComponentProps } from "react";
import AntDesignIcons from "@expo/vector-icons/AntDesign";
import { type IconProps as ExpoIconProps } from "@expo/vector-icons/build/createIconSet";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AppTheme } from "@/themes/theme";
import { sizes } from "@/themes/sizes";
import { useColors } from "@/hooks/useColors";

export type IconNames =
  | ComponentProps<typeof Ionicons>["name"]
  | ComponentProps<typeof AntDesignIcons>["name"]
  | ComponentProps<typeof MaterialIcons>["name"]
  | ComponentProps<typeof FontAwesome>["name"]
  | ComponentProps<typeof MaterialCommunityIcons>["name"];

export type IconProps = Omit<
  ExpoIconProps<string>,
  "name" | "size" | "color"
> & {
  name: IconNames;
  size?: keyof AppTheme["sizes"];
  color?: keyof AppTheme["colors"] | string;
};

function Icon({
  style,
  color = "transparent",
  size = "md",
  ...rest
}: IconProps) {
  const colors = useColors();
  const iconSize = sizes[size];
  const iconColor = colors[color as keyof typeof colors] || color;

  if (rest.name in AntDesignIcons.glyphMap) {
    return (
      <AntDesignIcons
        color={iconColor}
        size={iconSize}
        style={style}
        {...rest}
        name={rest.name as ComponentProps<typeof AntDesignIcons>["name"]}
      />
    );
  }

  if (rest.name in MaterialIcons.glyphMap) {
    return (
      <MaterialIcons
        color={iconColor}
        size={iconSize}
        style={style}
        {...rest}
        name={rest.name as ComponentProps<typeof MaterialIcons>["name"]}
      />
    );
  }

  if (rest.name in Ionicons.glyphMap) {
    return (
      <Ionicons
        color={iconColor}
        size={iconSize}
        style={style}
        {...rest}
        name={rest.name as ComponentProps<typeof Ionicons>["name"]}
      />
    );
  }

  if (rest.name in FontAwesome.glyphMap) {
    return (
      <FontAwesome
        color={iconColor}
        size={iconSize}
        style={style}
        {...rest}
        name={rest.name as ComponentProps<typeof FontAwesome>["name"]}
      />
    );
  }

  if (rest.name in MaterialCommunityIcons.glyphMap) {
    return (
      <MaterialCommunityIcons
        color={iconColor}
        size={iconSize}
        style={style}
        {...rest}
        name={
          rest.name as ComponentProps<typeof MaterialCommunityIcons>["name"]
        }
      />
    );
  }

  return null;
}

export default Icon;
