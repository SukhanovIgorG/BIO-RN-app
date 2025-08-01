import { getUsersList } from "@/services/users.service";
import { useQuery } from "@tanstack/react-query";

export const useGetUsersList = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const users = await getUsersList();
      return users;
    },
  });
};
