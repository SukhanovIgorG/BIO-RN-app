import { Paddings, Radius } from "@/constants/tokens";
import { Eye, EyeClosed } from "lucide-react-native";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Typography } from "../Typography";

export type InputProps = {
  label?: string;
  isPassword?: boolean;
  errorMessage?: string;
} & TextInputProps;

export const Input = ({
  isPassword,
  label,
  errorMessage,
  ...props
}: InputProps) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View>
      {label && <Typography variant="body">{label}</Typography>}
      <TextInput
        style={styles.input}
        secureTextEntry={isPassword && !isPasswordVisible}
        {...props}
      />
      {isPassword && (
        <Pressable
          style={styles.icon}
          onPress={() => setPasswordVisible((s) => !s)}
        >
          {isPasswordVisible ? <Eye /> : <EyeClosed />}
        </Pressable>
      )}
      {errorMessage && <Typography variant="error">{errorMessage}</Typography>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: Paddings.p16,
    backgroundColor: Colors.background,
    borderRadius: Radius.r8,
    borderWidth: 2,
    borderColor: Colors.text,
    flexDirection: "row",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    position: "absolute",
    right: 8,
    top: 10,
    height: "100%",
  },
});
