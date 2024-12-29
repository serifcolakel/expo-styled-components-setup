import * as SecureStore from "expo-secure-store";

import { isWeb } from "./platform.utils";

import { storageKeys } from "@/constants/common";

export async function saveToStorage(
  key: keyof typeof storageKeys,
  value: string
) {
  try {
    if (
      isWeb() &&
      typeof localStorage !== "undefined" &&
      typeof key === "string" &&
      typeof value === "string"
    ) {
      localStorage.setItem(key, value);
    } else {
      if (typeof key === "string") {
        await SecureStore.setItemAsync(key, value);
      }
    }

    return true;
  } catch (error) {
    console.error("Failed to save item to storage", error);

    return false;
  }
}

export async function getFromStorage<TValue = string>(
  key: keyof typeof storageKeys
): Promise<TValue | null> {
  let result: string | null;

  try {
    if (
      isWeb() &&
      typeof localStorage !== "undefined" &&
      typeof key === "string"
    ) {
      result = localStorage.getItem(key);
    } else {
      if (typeof key === "string") {
        result = await SecureStore.getItemAsync(key);
      } else {
        return null;
      }
    }

    return result as TValue;
  } catch (error) {
    console.error("Failed to get item from storage", error);

    return null;
  }
}

export async function removeFromStorage(
  key: keyof typeof storageKeys
): Promise<boolean> {
  try {
    if (
      isWeb() &&
      typeof localStorage !== "undefined" &&
      typeof key === "string"
    ) {
      localStorage.removeItem(key);
    } else {
      if (typeof key === "string") await SecureStore.deleteItemAsync(key);
    }

    return true;
  } catch (error) {
    console.error("Failed to remove item from storage", error);

    return false;
  }
}

export async function clearStorage(): Promise<boolean> {
  try {
    if (isWeb()) {
      localStorage.clear();
    } else {
      for (let key in storageKeys) {
        await SecureStore.deleteItemAsync(key);
      }
    }

    return true;
  } catch (error) {
    console.error("Failed to clear storage", error);

    return false;
  }
}
