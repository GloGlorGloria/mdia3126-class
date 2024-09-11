import {View, Text} from "react-native";

export default function MyLabel(
    text="Label"
){

    return <View style={{
        backgroundColor:"#CCC",
        borderRadius: 10,
        padding:8
    }}>
        <Text>{text}</Text>
    </View>
}