import { Text, type TextProps } from "react-native";

export type TypographyProps = TextProps & {
  children?: React.ReactNode;
};

export const Typography = ({ children, ...rest }: TypographyProps) => {
  return <Text {...rest}>{children}</Text>;
};
