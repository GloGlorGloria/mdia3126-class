// import { Button, View } from "react-native";
// export default function MyButton(
//     text="Button"
// ){
//     return <View>
//         <Button
//             title={text}
//         />    
//     </View>
// }

// import ( Button as NativeButton, View) from "react-native"

//as don't want myButton all the time, so import Button as NativeButton

import {Button as NativeButton, View } from "react-native";
export default function Button({ buttonText }){
    return <View>
        <NativeButton title={buttonText}/>
    </View>
};


