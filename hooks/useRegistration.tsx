import { Routes } from "@/constants/routes";
import { useAuth } from "@/context/auth.context";
import { register } from "@/services/auth.service";
import { RegisterUserDto, User } from "@/types";
import { translateError } from "@/utils/translateError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { Alert } from "react-native";

export const useRegistration = () => {
  const { setAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (dto: RegisterUserDto) => {
      const user = await register(dto);
      return user;
    },
    onSuccess: (user) => {
      setAuthenticated(true);
      queryClient.setQueryData<User>(["user"], user);

      router.replace(Routes.Home);
    },
    onError: (error) => {
      Alert.alert(translateError(error));
    },
  });
};
