import { Routes } from "@/constants/routes";
import { useAuth } from "@/context/auth.context";
import { register } from "@/services/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { Alert } from "react-native";

export const useRegistration = () => {
  const { setAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (dto: { email: string; password: string }) => {
      const user = await register(dto.email, dto.password);
      return user;
    },
    onSuccess: (user) => {
      setAuthenticated(true);
      queryClient.setQueryData(["user"], user);

      router.replace(Routes.Home);
    },
    onError: (error) => {
      Alert.alert("Registration failed", error.message);
      console.log("Registration failed", error);
    },
  });
};
