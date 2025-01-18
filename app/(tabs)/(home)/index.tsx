import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center px-10 gap-4">
      <Text className="font-bold text-2xl">Navigation Links</Text>
      <View className=" w-full p-5 rounded-lg border-[1px] border-black border-dashed gap-3">
        <Link href="/details/1" className="italic text-lg" asChild>
          <TouchableOpacity className="bg-blue-500 px-3 py-2 rounded-md">
            <Text className="font-bold text-white">Detail with ID 1</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/details/2" className="italic text-lg" asChild>
          <TouchableOpacity className="bg-blue-500 px-3 py-2 rounded-md">
            <Text className="font-bold text-white">Detail with ID 2</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({});
