import { colors } from "@/themes/colors";

import { useTheme } from "./useTheme";

export function useColors() {
  const { theme } = useTheme();

  return colors[theme];
}
