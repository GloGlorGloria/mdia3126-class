// import { View } from "react-native";
// import MyLabel from "../atom/Label";
// import MyButton from "../atom/Button";

// export default function LabelButton({
//     label_text= "label",
//     button_text= "button",
// }){
//     return <View>
//         {/* <MyLabel text={label_text} />
//         <MyButton text={button_text} />   */}
//     </View>
// }

import { Button as NativeButton, View } from "react-native";
import Button from "../atom/Button";
import Label from "../atom/Label";

export default function LabelButton({ labelText, buttonText }){
    return(
        <View>
            <Label labelText={labelText} />
            <Button buttonText={buttonText} />
        </View>
    )
};