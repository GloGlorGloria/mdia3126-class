import { Text, View } from "react-native";
export default function Bio({ NameText }){
    return <View> 
        <h1
            style={{
                color:"blue",
                fontFamily: "Ubuntu",

            }}>{NameText}</h1>
    </View>
};