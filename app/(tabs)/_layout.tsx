import React from "react";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import { useColors } from "@/hooks/useColors";
import Icon from "@/components/ui/icon";
import Text from "@/components/ui/text";

export default function TabLayout() {
  const colors = useColors();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.border,
        tabBarLabel(props) {
          return <Text>{props.children}</Text>;
        },
        tabBarIcon: ({ color }) => <Icon name="code" color={color} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: colors.primary },

          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Icon
                    name="info-outline"
                    size={"xl"}
                    color={colors.primary}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
        }}
      />
    </Tabs>
  );
}
