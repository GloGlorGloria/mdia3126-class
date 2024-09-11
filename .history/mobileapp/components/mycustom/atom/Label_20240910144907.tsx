// import {View, Text} from "react-native";

// export default function MyLabel(
//     text="Label"
// ){

//     return <View style={{
//         backgroundColor:"#CCC",
//         borderRadius: 10,
//         padding:8
//     }}>
//         <Text>{text}</Text>
//     </View>
// }

//lab

import { Text, View } from "react-native";
export default function Label({ labelText }){
    //return <view> must be on the same line or with a ()
    return <View> 
        <Text
            style={{color:"salmon"}}>{labelText}</Text>
    </View>
};

/**return(
    <View> 
    <Text
    style={{color:"salmon"}}>{labelText}</Text>
    </View> */

