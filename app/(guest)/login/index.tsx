import { Routes } from "@/constants/routes";
import { Colors, Gaps, Paddings, Radius } from "@/constants/tokens";
import { useForm } from "@/hooks";
import { useLogin } from "@/hooks/useLogin";
import { DefaultLayout } from "@/layouts";
import { Button, Typography } from "@/uikit";
import { Input } from "@/uikit/Input";
import { isEmailValid } from "@/utils/validation";
import { router } from "expo-router";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const initialValues = {
  email: "",
  password: "",
};

const validators = {
  email: [
    (str: string) => (str.length < 3 ? "Минимум 3 символа" : null),
    (str: string) => (!isEmailValid(str) ? "Некорректный email" : null),
  ],
  password: [(str: string) => (str.length < 6 ? "Минимум 6 символов" : null)],
};

export default function LoginScreen() {
  const {
    errors,
    values: { email, password },
    setField,
    handleSubmit,
    isValid,
  } = useForm({
    initialValues,
    validators,
  });

  const { mutate: login } = useLogin();

  const onSubmit = (values: typeof initialValues) => {
    login(values);
  };

  return (
    <DefaultLayout>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.page}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.page}>
              <Typography variant="title">Вход</Typography>
              <View style={styles.card}>
                <Input
                  label="Email"
                  value={email}
                  onChangeText={(e) => setField("email", e)}
                  placeholder="Email"
                  errorMessage={errors.email}
                />
                <Input
                  label="Пароль"
                  value={password}
                  onChangeText={(e) => setField("password", e)}
                  placeholder="Пароль"
                  isPassword
                  errorMessage={errors.password}
                />
                <Button
                  title="Войти"
                  type="primary"
                  onPress={handleSubmit(onSubmit)}
                  disabled={!isValid}
                />
                <Button
                  title="Нет аккаунта"
                  type={"link"}
                  onPress={() => router.replace(Routes.Registration)}
                />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    justifyContent: "center",
    gap: Gaps.g16,
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
