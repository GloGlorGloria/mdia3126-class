import { View } from "react-native"
import Bio from "../atom/Bio";
import Name from "../atom/Name";
import ProfilePic from "../atom/ProfilePic"
import ImageLink from "../atom/ProfilePic"

export default function LabelButton({ NameText, BioText, ImageLink }){
    return(
        <View>
            <Name NameText={NameText} />
            <Bio BioText={BioText} />
            <ProfilePic ImageLink={ImageLink}/>
        </View>
    )
}