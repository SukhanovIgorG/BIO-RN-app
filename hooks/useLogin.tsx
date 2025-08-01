import { login } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { Alert } from "react-native";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (dto: { email: string; password: string }) => {
      const user = await login(dto.email, dto.password);
      return user;
    },
    onSuccess: () => {
      console.log("User logged in");
    },
    onError: (error) => {
      Alert.alert("Login failed", error.message);
      console.log("Login failed", error);
    },
  });
};
