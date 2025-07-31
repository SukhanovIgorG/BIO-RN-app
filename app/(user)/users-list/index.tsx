import { DefaultLayout } from "@/layouts";
import { Typography } from "@/uikit";
import { FlatList, StyleSheet, View } from "react-native";

const MOCK_USERS = [
  {
    id: 1,
    name: "John Doe",
    email: "8m5yR@example.com",
  },
  {
    id: 2,
    name: "Robert Doe",
    email: "8m5yR@example.com",
  },
  {
    id: 3,
    name: "John Doe",
    email: "8m5yR@example.com",
  },
  {
    id: 4,
    name: "Robert Doe",
    email: "8m5yR@example.com",
  },
  {
    id: 5,
    name: "John Doe",
    email: "8m5yR@example.com",
  },
  {
    id: 6,
    name: "Robert Doe",
    email: "8m5yR@example.com",
  },
  {
    id: 7,
    name: "John Doe",
    email: "8m5yR@example.com",
  },
  {
    id: 8,
    name: "Robert Doe",
    email: "8m5yR@example.com",
  },
  {
    id: 9,
    name: "John Doe",
    email: "8m5yR@example.com",
  },
  {
    id: 10,
    name: "Robert Doe",
    email: "8m5yR@example.com",
  },
  {
    id: 11,
    name: "John Doe",
    email: "8m5yR@example.com",
  },
  {
    id: 12,
    name: "Robert Doe",
    email: "8m5yR@example.com",
  },
];

export default function UsersListScreen() {
  return (
    <DefaultLayout>
      <FlatList
        data={MOCK_USERS}
        renderItem={({ item }) => (
          <View style={styles.userCard} key={item.id}>
            <Typography>{item.name}</Typography>
            <Typography>{item.email}</Typography>
          </View>
        )}
      />
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  userCard: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
  },
});
