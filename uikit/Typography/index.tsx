import { Text, type TextProps } from "react-native";

type TypographyVariants = "title" | "subtitle" | "body" | "caption";

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
    body: { fontSize: 16 },
    caption: { fontSize: 12 },
    subtitle: { fontSize: 20 },
    title: { fontSize: 24 },
  };
  return (
    <Text style={[variant && variants[variant], { color }]} {...rest}>
      {children}
    </Text>
  );
};
