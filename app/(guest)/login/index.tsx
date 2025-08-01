import { Routes } from "@/constants/routes";
import { Colors, Gaps, Paddings, Radius } from "@/constants/tokens";
import { useLogin } from "@/hooks/useLogin";
import { DefaultLayout } from "@/layouts";
import { Button, Typography } from "@/uikit";
import { Input } from "@/uikit/Input";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login } = useLogin();

  const handleSubmit = () => {
    login({ email, password });
  };

  return (
    <DefaultLayout>
      <View style={styles.page}>
        <Typography variant="title">Вход</Typography>
        <View style={styles.card}>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <Input
            label="Пароль"
            value={password}
            onChangeText={setPassword}
            placeholder="Пароль"
            isPassword
          />
          <Button title="Войти" type="primary" onPress={handleSubmit} />
          <Button
            title="Нет аккаунта"
            type={"link"}
            onPress={() => router.replace(Routes.Registration)}
          />
        </View>
      </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  page: {
    height: "100%",
    flexDirection: "column",
    gap: Gaps.g16,
    justifyContent: "center",
  },
  card: {
    flexDirection: "column",
    gap: Gaps.g16,
    padding: Paddings.p24,
    borderColor: Colors.text,
    borderWidth: 2,
    borderRadius: Radius.r8,
  },
});
