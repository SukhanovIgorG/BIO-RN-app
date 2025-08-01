import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { House, UsersRound } from "lucide-react-native";

import { LogoutButton } from "@/components/Buttons/LogoutButton";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerRight: () => <LogoutButton style={{ marginRight: 10 }} />,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <House size={28} />,
        }}
      />
      <Tabs.Screen
        name="users-list/index"
        options={{
          title: "Список пользователей",
          tabBarIcon: () => <UsersRound size={28} />,
        }}
      />
    </Tabs>
  );
}
