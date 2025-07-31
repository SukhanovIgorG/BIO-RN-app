import { ReactNode } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";
import { Typography, TypographyProps } from "../Typography";

export interface ButtonProps extends TouchableOpacityProps {
  icon?: ReactNode;
  title?: string;
  typographyProps?: Partial<TypographyProps>;
  type?: "primary" | "secondary";
}

export const Button = ({
  icon,
  onPress,
  style,
  title,
  type,
  disabled,
  typographyProps,
  ...restProps
}: ButtonProps) => {
  const variants = {
    primary: {
      paddingVertical: 11.5,
      backgroundColor: "#000",
      color: "#fff",
    },
    secondary: {
      paddingVertical: 17.5,
      backgroundColor: "#fff",
      color: "#000",
    },
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, type && variants[type], style]}
      {...restProps}
    >
      {icon}
      {title && (
        <Typography {...typographyProps} numberOfLines={2}>
          {title}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
