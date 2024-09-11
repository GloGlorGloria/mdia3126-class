import { View } from "react-native";
import MyButton from "../atom/Button"
import MyLabel from "../atom/Label";

export default function LabelButton(
    label=null
){
    return <View>
        <MyLabel/>
        <MyButton/>  
    </View>
}