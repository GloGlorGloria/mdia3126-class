import { Text, View } from "react-native";
export default function Bio({ BioText }){
    return <View> 
        <p
            style={{color:"dark blue"}}>{BioText}</p>
    </View>
};