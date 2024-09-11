import { Text, View } from "react-native";
export default function Bio({ BioText }){
    return <View> 
        <p
            style={{
                color:"green",
                width: "20%",
                flexDirection: "column",

            }}>{BioText}</p>
    </View>
};