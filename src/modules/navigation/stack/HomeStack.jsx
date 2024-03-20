import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../home/adapters/screens/Home";
import RestaruantDetail from "../../home/adapters/screens/RestaruantDetail";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Restaurantes" }}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaruantDetail}
        options={{ title: "Restaurant" }}
      />
    </Stack.Navigator>
  );
}
