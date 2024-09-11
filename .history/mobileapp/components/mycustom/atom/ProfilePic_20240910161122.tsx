import { Image as NativeImage, View } from "react-native";
export default function Image({ ProfilePic }){
    return <View> 
        <NativeImage>{ProfilePic}</NativeImage>
    </View>
};