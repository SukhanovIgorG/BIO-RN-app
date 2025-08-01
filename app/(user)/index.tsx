import { DefaultLayout } from "@/layouts";
import { User } from "@/types";
import { Typography } from "@/uikit";
import { useQueryClient } from "@tanstack/react-query";

export default function HomeScreen() {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<User>(["user"]);

  console.log("user :>> ", user);

  return (
    <DefaultLayout>
      <Typography>Привет {user?.username}! 👋</Typography>
    </DefaultLayout>
  );
}
