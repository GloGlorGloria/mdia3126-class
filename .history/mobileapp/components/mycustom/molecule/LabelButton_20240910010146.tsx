import { View } from "react-native";
import MyButton from "../atom/Button"
import MyLabel from "../atom/Label";

export default function LabelButton({
    label_text="label",
    button_text="button"
}){
    return <View>
        <MyLabel text={label_text}/>
        <MyButton text={button_text}/>  
    </View>
};