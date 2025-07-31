import { Colors, Gaps, Paddings, Radius } from "@/constants/tokens";
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
  type?: "primary" | "secondary" | "link";
}

export const Button = ({
  icon,
  onPress,
  style,
  title,
  type = "link",
  disabled,
  typographyProps,
  ...restProps
}: ButtonProps) => {
  const variants = {
    primary: {
      paddingVertical: 16,
      backgroundColor: Colors.text,
      color: Colors.background,
      borderWidth: 0,
    },
    secondary: {
      paddingVertical: 12,
      backgroundColor: Colors.background,
      color: Colors.text,
      borderWidth: 1,
    },
    link: {
      paddingVertical: 8,
      backgroundColor: "transparent",
      color: Colors.text,
      borderWidth: 0,
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
        <Typography
          style={{ color: variants[type].color || Colors.text }}
          {...typographyProps}
          numberOfLines={2}
        >
          {title}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: Radius.r8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: Gaps.g16,
    borderColor: Colors.text,
    borderWidth: 1,
    paddingHorizontal: Paddings.p16,
  },
});
