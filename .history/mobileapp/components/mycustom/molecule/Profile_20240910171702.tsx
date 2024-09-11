import { View } from "react-native"
import Bio from "../atom/Bio";
import Name from "../atom/Name";
import ProfilePic from "../atom/ProfilePic"

export default function LabelButton({ NameText, BioText, ImageLink }){
    return(
        <View
            style={{justifyContent: "center",}}>
                <Name NameText={NameText} />
                <ProfilePic ImageLink={ImageLink}/>
                <Bio BioText={BioText} />     
        </View>
    )
}