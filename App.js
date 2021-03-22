import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home";
import Mais from "./src/screens/Mais";
import TipoSanguineo from "./src/screens/TipoSanguineo";
import Sobre from "./src/screens/Sobre";

import Blood from "./src/assets/blood.svg";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#F8F9FA" },
          headerTintColor: "black",
          headerTitleStyle: { fontWeight: "100", fontFamily: "Roboto" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "DOE SANGUE",
            headerLeft: () => <Blood width={24} height={24} />,
            headerLeftContainerStyle: { alignItems: "center", marginLeft: 20 },
          }}
        />
        <Stack.Screen
          name="Mais"
          component={Mais}
          options={{
            title: "SAIBA MAIS",
          }}
        />
        <Stack.Screen
          name="TipoSanguineo"
          component={TipoSanguineo}
          options={{
            title: "TIPO SANGUÍNEO",
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: "Sobre o projeto",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
