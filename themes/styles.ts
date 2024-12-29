export const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const fontSizes = {
  xs: 8,
  sm: 12,
  base: 14,
  md: 16,
  lg: 20,
  xl: 24,
  "2xl": 28,
  "3xl": 32,
  "4xl": 40,
  "5xl": 48,
  "6xl": 56,
  "7xl": 64,
} as const;

export const weights = {
  light: "300",
  regular: "400",
  semibold: "600",
  bold: "700",
} as const;

export const align = {
  left: "left",
  center: "center",
  right: "right",
} as const;

export const justify = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
} as const;

export const borderWidth = {
  none: 0,
  xs: 0.25,
  sm: 0.5,
  base: 1,
  md: 2,
  lg: 4,
  xl: 8,
} as const;

export const opacity = {
  none: 0,
  xs: 0.1,
  sm: 0.2,
  base: 0.5,
  md: 0.75,
  lg: 0.9,
  full: 1,
} as const;
