import { Tabs } from "expo-router";
import { View, Text } from "react-native";
const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="(home)" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
};
export default TabLayout;
