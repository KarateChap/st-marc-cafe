import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";
const DetailsScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const LogoTitle = () => (
    <Image
      style={styles.image}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );

  return (
    <View className="flex-1 items-center justify-center">
      <Stack.Screen
        options={{
          headerTitle: () => <LogoTitle />,
          headerRight: () => (
            <Button
              onPress={() => {
                router.setParams({ id: "hehe" });
              }}
              title="Set Title"
            />
          ),
        }}
      />
      <Text
        onPress={() => {
          router.setParams({ id: `New` });
        }}
      >
        Details of user {params.id}
      </Text>
    </View>
  );
};
export default DetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
