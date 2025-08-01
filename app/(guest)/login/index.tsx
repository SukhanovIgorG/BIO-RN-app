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
        <Typography variant="title">Вход</Typography>
        <View style={styles.card}>
          <Input />
          <Input isPassword />
          <Button
            title="Войти"
            type="primary"
            onPress={() => router.replace("/(user)")}
          />
          <Button
            title="Нет аккаунта"
            type={"link"}
            onPress={() => router.replace("/(guest)/registration")}
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
