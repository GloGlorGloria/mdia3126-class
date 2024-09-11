import { Text, View } from "react-native";

//time to make a branch to do some atomic design
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontSize:50
      }}>Welcome to my app!</Text>
    </View>
  );
}
