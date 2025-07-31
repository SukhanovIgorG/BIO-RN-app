import { ReactNode } from "react";
import { Button, StyleSheet, View } from "react-native";

interface HeaderProps {
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  children?: ReactNode;
}
export const Header = ({ children, leftSlot, rightSlot }: HeaderProps) => {
  return (
    <View style={headerStyle.header}>
      <Button title="Back"></Button>
      {leftSlot}
      {children}
      {rightSlot}
    </View>
  );
};

const headerStyle = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    padding: 4,
    backgroundColor: "lightblue",
    height: 48,
  },
});
