import { ReactNode } from "react";

import { SafeAreaView, StyleSheet, View } from "react-native";

export interface DefaultLayoutProps {
  children: ReactNode;
  withHeader?: boolean;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <SafeAreaView style={{ ...styles.layout }}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    position: "relative",
    flex: 1,
  },
  content: {
    position: "relative",
    flex: 1,
    paddingTop: 36,
    paddingHorizontal: 40,
  },
});
