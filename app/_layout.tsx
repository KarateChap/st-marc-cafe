import { StyleSheet, Text, View } from "react-native";
import "../global.css";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
