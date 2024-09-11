import Bio from "../atom/Bio";
import Name from "../atom/Name";

export default function LabelButton({ NameText, BioText }){
    return(
        <View>
            <Name NameText={NameText} />
            <Button buttonText={BioText} />
        </View>
    )