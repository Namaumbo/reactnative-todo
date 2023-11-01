import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./src/componets/Home/Home.js";
import Todo from "./src/componets/TodoItem/Todo.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./src/pages/itemDetails/Details.js";
import Item from "./src/componets/item/Item.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Todo" component={Todo} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
