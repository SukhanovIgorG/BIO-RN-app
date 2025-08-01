import { useGetUsersList } from "@/hooks/useGetUsersList";
import { DefaultLayout } from "@/layouts";
import { Typography } from "@/uikit";
import { FlatList, StyleSheet, View } from "react-native";

export default function UsersListScreen() {
  const { data: users } = useGetUsersList();

  return (
    <DefaultLayout>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.userCard} key={item.id}>
            <Typography>{item?.username}</Typography>
            <Typography>{item?.email}</Typography>
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
