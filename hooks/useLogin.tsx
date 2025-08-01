import { Routes } from "@/constants/routes";
import { useAuth } from "@/context/auth.context";
import { login } from "@/services/auth.service";
import { LoginUserDto, User } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { Alert } from "react-native";

export const useLogin = () => {
  const { setAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (dto: LoginUserDto) => {
      const data = await login(dto);
      return data;
    },
    onSuccess: ({ user }) => {
      setAuthenticated(true);
      queryClient.setQueryData<User[]>(["user"], user);

      router.replace(Routes.Home);
    },
    onError: (error) => {
      Alert.alert("Login failed", error.message);
      console.log("Login failed", error);
    },
  });
};
