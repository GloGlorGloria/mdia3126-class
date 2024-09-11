import { Text, View } from "react-native";
export default function Bio({ BioText }){
    return <View> 
        <p
            style={{
                color:"green",
                textAlign: "justify",
                fontSize: 18,
                width: "80%",
            }}>{BioText}</p>
    </View>
};