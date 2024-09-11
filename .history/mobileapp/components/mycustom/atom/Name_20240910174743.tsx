import { Text, View } from "react-native";
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:regular,bold,italic&subset=latin,latin-ext');

export default function Bio({ NameText }){
    return <View> 
        <h1
            style={{
                color:"blue",
                fontFamily: "Roboto",

            }}>{NameText}</h1>
    </View>
};