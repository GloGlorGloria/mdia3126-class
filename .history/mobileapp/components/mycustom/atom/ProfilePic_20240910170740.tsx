import { Image as NativeImage, View } from "react-native";
export default function Image({ ImageLink }){
    return <View> 
        <NativeImage
        src={{ImageLink}}
        style={{width:"100",
            height:"50"
        }}/>
    </View>
};