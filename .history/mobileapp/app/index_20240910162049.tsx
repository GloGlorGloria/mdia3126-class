import { Text, View } from "react-native";
// import Button from "@/components/mycustom/atom/Button";
// import Label from "@/components/mycustom/atom/Label";

//no need {}
// import { Button } from "@/components/atom/Button"
//time to make a branch to do some atomic design
//may not need template for now
//using web for the sake of recording

//adding here to test
// import MyButton from "@/components/mycustom/atom/Button";
// import LabelButton from "@/components/mycustom/molecule/LabelButton";

// import InputForm from "@/components/mycustom/molecule/InputForm";
import Name from "@/components/mycustom/atom/Name"
import Bio from "@/components/mycustom/atom/Bio";
import ProfilePic from "@/components/mycustom/atom/ProfilePic";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <LabelButton
        label_text="previous"
        button_text="<-"
        />

      <LabelButton
        label_text="next"
        button_text="->"
        /> */}
    {/* <Button buttonText="Kill you!"/>
    <Label labelText="Kill yourself"/> */}
    {/* <LabelButton buttonText="Now" labelText="Heads up"/> */}
    {/* <InputForm
      buttonText="BOMB"
      labelText="Enter a number"/> */}
      <Name NameText="Steve Jobs"/>
      <Bio BioText="Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American businessman, inventor, and investor best known for co-founding the technology company Apple Inc. Jobs was also the founder of NeXT and chairman and majority shareholder of Pixar. He was a pioneer of the personal computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple co-founder Steve Wozniak."/>
      <ProfilePic ImageLink="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPvFqD-oo4WMdikaau1qoCReBs1-aJSKEKRXubxk03-5MTDjJJ"/>
    </View>
  );
}
