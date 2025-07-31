import { Button, ButtonProps } from "@/uikit";

export const LogoutButton = (props: ButtonProps) => {
  return (
    <Button
      type="secondary"
      onPress={() => console.log("Logout")}
      {...props}
      title="Выход"
    />
  );
};
