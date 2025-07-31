import { Routes } from "@/constants/routes";
import { Button, ButtonProps } from "@/uikit";
import { router } from "expo-router";

export const LogoutButton = (props: ButtonProps) => {
  return (
    <Button
      type="secondary"
      onPress={() => router.replace(Routes.Login)}
      {...props}
      title="Выход"
    />
  );
};
