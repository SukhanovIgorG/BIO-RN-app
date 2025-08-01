import { Routes } from "@/constants/routes";
import { useAuth } from "@/context/auth.context";
import { Button, ButtonProps } from "@/uikit";
import { router } from "expo-router";

export const LogoutButton = (props: ButtonProps) => {
  const { setAuthenticated } = useAuth();
  const handleLogout = () => {
    setAuthenticated(false);
    router.replace(Routes.Login);
  };
  return (
    <Button type="secondary" onPress={handleLogout} {...props} title="Выход" />
  );
};
