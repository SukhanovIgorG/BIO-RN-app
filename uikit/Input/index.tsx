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

export type InputProps = {
  isPassword?: boolean;
} & TextInputProps;

export const Input = ({ isPassword, ...props }: InputProps) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View>
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
    top: 0,
    height: "100%",
  },
});
