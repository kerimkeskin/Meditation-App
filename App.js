import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigator from "./src/navigation/Navigator";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor style="light" />
      <Navigator />
    </>
  );
};

export default App;
