import { useCallback, useEffect, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router";

import { getFromStorage, saveToStorage } from "@/utils/storage.utils";

import { storageKeys } from "@/constants/common";
import { colors } from "@/themes/colors";

type Theme = "dark" | "light";

interface UseThemeResult {
  isLoaded: boolean;
  theme: Theme;
  toggleTheme: () => void;
  colors: typeof colors.light | typeof colors.dark;
  isDark: boolean;
  isLight: boolean;
}

const getStoredTheme = async (): Promise<Theme | null> => {
  try {
    const storedTheme = await getFromStorage(storageKeys.theme);

    return storedTheme as Theme | null;
  } catch (error) {
    console.error("Failed to get theme from storage", error);

    return null;
  }
};

const setStoredTheme = async (theme: Theme): Promise<void> => {
  try {
    await saveToStorage(storageKeys.theme, theme);
  } catch (error) {
    console.error("Failed to save theme to storage", error);
  }
};

export function useTheme(): UseThemeResult {
  const { colorScheme: globalColorScheme } = useGlobalSearchParams();
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  const selectedColors = useMemo(
    () => (theme === "light" ? colors.dark : colors.light),
    [theme]
  );

  const initializeTheme = useCallback(async () => {
    const storedTheme = await getStoredTheme();

    if (!storedTheme) {
      const systemTheme = colorScheme === "dark" ? "dark" : "light";

      await setStoredTheme(systemTheme);
      setTheme(systemTheme);
    } else {
      setTheme(storedTheme);
    }

    setIsLoaded(true);
  }, [colorScheme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";

    setStoredTheme(newTheme).then(() => {
      setTheme(newTheme);
      router.setParams({ colorScheme: newTheme });
    });
  }, [theme, router]);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    if (globalColorScheme) {
      setTheme(globalColorScheme as Theme);
    }
  }, [globalColorScheme]);

  return {
    isDark: theme === "dark",
    isLight: theme === "light",
    isLoaded,
    theme,
    toggleTheme,
    colors: selectedColors,
  };
}
