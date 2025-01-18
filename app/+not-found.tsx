import { Link, Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exists." }} />
      <View style={styles.container}>
        <Link href="/">Go to home screen</Link>
      </View>
    </>
  );
};
export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
