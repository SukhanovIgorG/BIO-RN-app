import { Routes } from "@/constants/routes";
import { Colors, Gaps, Paddings, Radius } from "@/constants/tokens";
import { useForm } from "@/hooks";
import { useRegistration } from "@/hooks/useRegistration";
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
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const validators = {
  username: [(str: string) => (str.length < 3 ? "Минимум 3 символа" : null)],
  email: [
    (str: string) => (str.length < 3 ? "Минимум 3 символа" : null),
    (str: string) => (!isEmailValid(str) ? "Некорректный email" : null),
  ],
  password: [(str: string) => (str.length < 6 ? "Минимум  6 символов" : null)],
  repeatPassword: [
    (str: string) => (str.length < 6 ? "Минимум  6 символов" : null),
  ],
};

export default function RegistrationScreen() {
  const {
    errors,
    values: { username, email, password, repeatPassword },
    setField,
    handleSubmit,
    isValid,
  } = useForm({
    initialValues,
    validators,
  });

  const { mutate: register } = useRegistration();

  const onSubmit = (values: typeof initialValues) => {
    const { username, email, password } = values;
    register({ username, email, password });
  };

  const comparePasswordsError =
    password !== repeatPassword ? "Пароли не совпадают" : null;

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
              <Typography variant="title">Регистрация</Typography>
              <View style={styles.card}>
                <Input
                  label="Имя"
                  value={username}
                  onChangeText={(e) => setField("username", e)}
                  placeholder="Имя"
                  errorMessage={errors.username}
                />
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
                  errorMessage={errors.password}
                  isPassword
                />
                <Input
                  label="Повторите пароль"
                  value={repeatPassword}
                  onChangeText={(e) => setField("repeatPassword", e)}
                  placeholder="Повторите пароль"
                  errorMessage={comparePasswordsError || errors.repeatPassword}
                  isPassword
                />
                <Button
                  title="Зарегистрироваться"
                  type="primary"
                  onPress={handleSubmit(onSubmit)}
                  disabled={!isValid || !!comparePasswordsError}
                />
                <Button
                  title="Уже есть аккаунт"
                  type={"link"}
                  onPress={() => router.replace(Routes.Login)}
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
