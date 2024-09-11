import { Text, View } from "react-native";
import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

export default function Bio({ NameText }){
    return <View> 
        <h1
            style={{
                color:"blue",
                fontFamily: "Roboto",

            }}>{NameText}</h1>
    </View>
};