import { Text, View } from "react-native";

//time to make a branch to do some atomic design
//may not need template for now
//using web for the sake of recording

//adding here to test
import MyButton from "@/components/mycustom/atom/Button";
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
      <LabelButton/>

    </View>
  );
}
