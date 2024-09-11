import { View } from "react-native";
import MyLabel from "../atom/Label";
import MyButton from "../atom/Button";

export default function LabelButton({
    label_text="label",
    button_text="button"
}){
    return <View>
        <MyLabel text={label_text}/>
        <MyButton text={button_text}/>  
    </View>
}