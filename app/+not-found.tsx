import { DefaultLayout } from "@/layouts";
import { Button } from "@/uikit";
import { router, Stack } from "expo-router";
import { Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <DefaultLayout>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Text>This screen doesn&apos;t exist.</Text>
      <Button
        title="Go to the home screen"
        onPress={() => router.replace("/")}
      />
    </DefaultLayout>
  );
}
