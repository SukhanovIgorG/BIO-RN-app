import { Colors, Gaps, Paddings, Radius } from "@/constants/tokens";
import { DefaultLayout } from "@/layouts";
import { Button, Typography } from "@/uikit";
import { Input } from "@/uikit/Input";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function loginScreen() {
  return (
    <DefaultLayout>
      <View style={styles.page}>
        <Typography>Вход</Typography>
        <View style={styles.card}>
          <Input />
          <Input isPassword />
          <Button
            title="Нет аккаунта"
            onPress={() => router.replace("/(guest)/registration")}
          />
          <Button title="Войти" type="primary" />
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
