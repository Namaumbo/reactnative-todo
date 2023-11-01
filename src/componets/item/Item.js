import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./itemstyle";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';


export default function Item() {
  const navigation = useNavigation(); 
  // const handleShow = () => {
  //   navigation.navigate("Details");
  // };
  return (
    <>
      <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate("Details")}>
        <Text style={styles.item}>Item 1 on the list</Text>
        <View style={styles.Btns}>
          <TouchableOpacity
            style={styles.complete}
          
          >
            <Icon name="checkcircle" style={styles.completeBtn}></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="delete" style={styles.deleteBtn}></Icon>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  );
}
