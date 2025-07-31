import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen
        name="login"
        options={{
          title: "Вход",
        }}
      />
      <Tabs.Screen
        name="registration"
        options={{
          title: "Регистрация",
        }}
      />
    </Tabs>
  );
}
