import { Routes } from "@/constants/routes";
import { useAuth } from "@/context/auth.context";
import { register } from "@/services/auth.service";
import { RegisterUserDto, User } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
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
      if (error instanceof AxiosError) {
        Alert.alert("Пользователь с таким логином уже существует");
      }
      Alert.alert("Произошла непредвиденная ошибка");
    },
  });
};
