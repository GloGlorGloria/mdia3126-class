import { View, TextInput } from "react-native";
import Button from "../atom/Button";
import Label from "../atom/Label";

export default function InputFrom({ labelText, buttonText }){
    return <View>
        <Label labelText={labelText}/>
        <TextInput/><Button buttonText={buttonText} />
    </View>
}