import { Text, View } from "react-native";
export default function Bio({ BioText }){
    return <View> 
        <p
            style={{
                color:"green",
                width: "50%",
                textAlign:"center",

            }}>{BioText}</p>
    </View>
};