import { Routes } from "@/constants/routes";
import { Colors, Gaps, Paddings, Radius } from "@/constants/tokens";
import { useRegistration } from "@/hooks/useRegistration";
import { DefaultLayout } from "@/layouts";
import { Button, Typography } from "@/uikit";
import { Input } from "@/uikit/Input";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function RegistrationScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { mutate: register } = useRegistration();

  const handleSubmit = () => {
    register({ username, email, password });
  };

  return (
    <DefaultLayout>
      <View style={styles.page}>
        <Typography variant="title">Регистрация</Typography>
        <View style={styles.card}>
          <Input
            label="Имя"
            value={username}
            onChangeText={setUsername}
            placeholder="Имя"
          />
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
          <Input
            label="Пароль"
            value={repeatPassword}
            onChangeText={setRepeatPassword}
            placeholder="Пароль"
            isPassword
          />
          <Button
            title="Зарегистрироваться"
            type="primary"
            onPress={handleSubmit}
          />
          <Button
            title="Уже есть аккаунт"
            type={"link"}
            onPress={() => router.replace(Routes.Login)}
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
