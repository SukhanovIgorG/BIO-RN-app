import { Colors } from "@/constants/tokens";
import { Text, type TextProps } from "react-native";

type TypographyVariants = "title" | "subtitle" | "body" | "caption" | "error";

export type TypographyProps = TextProps & {
  children?: React.ReactNode;
  color?: string;
  variant?: TypographyVariants;
};

export const Typography = ({
  children,
  color,
  variant = "body",
  ...rest
}: TypographyProps) => {
  const variants: Record<TypographyVariants, TextProps["style"]> = {
    body: { fontSize: 16, color: Colors.text },
    caption: { fontSize: 12, color: Colors.tint },
    subtitle: { fontSize: 20, color: Colors.text },
    title: { fontSize: 24, color: Colors.text },
    error: { fontSize: 12, color: Colors.error },
  };
  return (
    <Text style={[{ color }, variant && variants[variant]]} {...rest}>
      {children}
    </Text>
  );
};
