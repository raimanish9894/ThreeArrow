import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootStackScreen from "./Screens/RootStackScreen";

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}


