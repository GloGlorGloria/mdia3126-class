import { Image, View } from "react-native";
export default function Image({ ProfilePic }){
    return <View> 
        <img src={ProfilePic}/>
    </View>
};