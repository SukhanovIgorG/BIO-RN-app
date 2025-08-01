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
        name="login/index"
        options={{
          title: "Вход",
        }}
      />
      <Tabs.Screen
        name="registration/index"
        options={{
          title: "Регистрация",
        }}
      />
    </Tabs>
  );
}
