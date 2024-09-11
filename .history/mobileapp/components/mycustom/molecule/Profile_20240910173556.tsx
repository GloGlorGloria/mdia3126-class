import { View } from "react-native"
import Bio from "../atom/Bio";
import Name from "../atom/Name";
import ProfilePic from "../atom/ProfilePic"

export default function LabelButton({ NameText, BioText, ImageLink }){
    return(
        <View
            style={{
                flex: 1,
                alignItems: "center", 
                width: '50%', 
                height: "50%",
            }}>
                <Name NameText={NameText} />
                <ProfilePic ImageLink={ImageLink}/>
                <Bio BioText={BioText} />     
        </View>
    )
}