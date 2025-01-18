import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShown: true,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="details" />
    </Stack>
  );
};
export default HomeLayout;

const styles = StyleSheet.create({});
