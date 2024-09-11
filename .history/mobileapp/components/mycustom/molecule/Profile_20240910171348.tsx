import { View } from "react-native"
import Bio from "../atom/Bio";
import Name from "../atom/Name";
import ProfilePic from "../atom/ProfilePic"
import ImageLink from "../atom/ProfilePic"

export default function LabelButton({ NameText, BioText, ImageLink }){
    return(
        <View>
            <div style={{
                alignItems:"center",
            }}>
                <Name NameText={NameText} />
                <ProfilePic ImageLink={ImageLink}/>
                <Bio BioText={BioText} />
            </div>
           
        </View>
    )
}