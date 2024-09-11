import { Text, View } from "react-native";
import Button from "@/components/mycustom/atom/Button";
import Label from "@/components/mycustom/atom/Label";
//no need {}
// import { Button } from "@/components/atom/Button"
//time to make a branch to do some atomic design
//may not need template for now
//using web for the sake of recording

//adding here to test
// import MyButton from "@/components/mycustom/atom/Button";
import LabelButton from "@/components/mycustom/molecule/LabelButton";

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
    <Button buttonText="Kill you!"/>
    <Label labelText="Kill yourself"/>
    </View>
  );
}
