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
      
    </View>
  );
}
