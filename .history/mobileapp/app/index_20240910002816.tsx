import { Text, View } from "react-native";

//time to make a branch to do some atomic design
//may not need template for now
//using web for the sake of recording
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
