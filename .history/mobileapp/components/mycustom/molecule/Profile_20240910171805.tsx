import { View } from "react-native"
import Bio from "../atom/Bio";
import Name from "../atom/Name";
import ProfilePic from "../atom/ProfilePic"

export default function LabelButton({ NameText, BioText, ImageLink }){
    return(
        <View
            style={{
                flex: 1, // Ensures the container takes up the full available space
                justifyContent: 'center', // Centers content vertically
                alignItems: 'center', // Centers content horizontally
                width: '100%', // Takes up full width
            }}>
                <Name NameText={NameText} />
                <ProfilePic ImageLink={ImageLink}/>
                <Bio BioText={BioText} />     
        </View>
    )
}