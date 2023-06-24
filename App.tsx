import { useState } from "react";
import Home from "./src/screens/Home/index";
import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  async () => {
    await Font.loadAsync({
      Poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    });

    setFontLoaded(true);
  };
  return <Home />;
}
