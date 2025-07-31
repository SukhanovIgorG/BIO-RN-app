import { DefaultLayout } from "@/layouts";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <DefaultLayout>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Text>This screen doesn&apos;t exist.</Text>
    </DefaultLayout>
  );
}
