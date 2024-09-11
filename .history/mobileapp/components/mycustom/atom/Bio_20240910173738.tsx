import { Text, View } from "react-native";
export default function Bio({ BioText }){
    return <View> 
        <p
            style={{
                color:"green",
                textAlign: "justify",
                fontSize: "18",

            }}>{BioText}</p>
    </View>
};