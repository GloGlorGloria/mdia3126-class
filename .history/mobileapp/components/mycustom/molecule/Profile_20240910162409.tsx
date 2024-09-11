import { View } from "react-native"
import Bio from "../atom/Bio";
import Name from "../atom/Name";
import ImageLink from "../atom/ProfilePic"

export default function LabelButton({ NameText, BioText, ImageLink }){
    return(
        <View>
            <Name NameText={NameText} />
            <Button buttonText={BioText} />
            <ProfilePic ImageLink={ImageLink}/>
        </View>
    )
}