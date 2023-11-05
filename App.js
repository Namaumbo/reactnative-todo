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
  const headerStyle = {
    headerStyle: {
      backgroundColor: "skyblue",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    statusBarColor: "skyblue",
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={headerStyle} name="Home" component={Home} />
        <Stack.Screen name="Todo" options={headerStyle} component={Todo} />
        <Stack.Screen name="Details" options={headerStyle}component={Details}/>
        <Stack.Screen name="Item" options={headerStyle} component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
