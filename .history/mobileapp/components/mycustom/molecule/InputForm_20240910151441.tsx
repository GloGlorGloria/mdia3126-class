import { View, TextInput } from "react-native";
import Button from "../atom/Button";
import Label from "../atom/Label";

export default function InputForm({ labelText, buttonText }){
    return <View
        style={{
            flexDirection:"row",
            gap:10,
            alignItems:"center"
        }}
    >
        <Label labelText={labelText}/>
        <TextInput
            style={{
                border:"5px solid pink"}}
            /><Button buttonText={buttonText} />
    </View>
};