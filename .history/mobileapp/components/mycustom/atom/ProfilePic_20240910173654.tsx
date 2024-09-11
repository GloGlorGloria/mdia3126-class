import { Image as NativeImage, View } from "react-native";
export default function Image({ ImageLink }){
    return <View> 
        <img src={ImageLink}
        style={{width:"100%",
            borderRadius:10,
        }}/>
    </View>
};