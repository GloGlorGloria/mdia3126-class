import { View, TextInput } from "react-native";
import Button from "../atom/Button";
import Label from "../atom/Label";

export default function InputForm({ labelText, buttonText }){
    return <View
        style={{
            flexDirection:"row",
            gap:10,
            alignItems:"center",
        }}
    >
        <Label labelText={labelText}/>
        <TextInput/><Button buttonText={buttonText} />
    </View>
};