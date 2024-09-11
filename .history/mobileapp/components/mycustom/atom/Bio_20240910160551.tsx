import { Text, View } from "react-native";
export default function Bio({ BioText }){
    return <View> 
        <p
            style={{
                color:"green",
                width: "50%",

            }}>{BioText}</p>
    </View>
};