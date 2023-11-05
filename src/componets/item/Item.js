import React,{useState} from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./itemstyle";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';


 export default function Item (props) {
  const navigation = useNavigation(); 
  // const completed  = useState();
  return (
    <>
    {/* // for now we can send the whole thing object as route params */}
      <TouchableOpacity style={props.itemDetails.completed ? styles.incomplete : styles.completed} onPress={() => navigation.navigate("Details",{'item':props.itemDetails})}>
        <Text style={styles.item}>{props.item}</Text>
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
