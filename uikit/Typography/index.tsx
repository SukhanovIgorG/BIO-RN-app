import { Text, type TextProps } from "react-native";

export type TypographyProps = TextProps & {
  children?: React.ReactNode;
  color?: string;
};

export const Typography = ({ children, color, ...rest }: TypographyProps) => {
  return (
    <Text style={{ color: color }} {...rest}>
      {children}
    </Text>
  );
};
