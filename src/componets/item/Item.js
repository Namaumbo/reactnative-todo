import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./itemstyle";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function Item(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={props.itemDetails.completed ? styles.completed : styles.incomplete}
      onPress={() =>
        navigation.navigate("Details", { item: props.itemDetails })
      }
    >
      <Text style={styles.item}>{props.item}</Text>
      <View style={styles.Btns}>
        {props.itemDetails.completed ? (
          //true completion
          <TouchableOpacity onPress={props.onUpdate}> 
            <Icon name="reload1" style={styles.incompleteBtn} />
          </TouchableOpacity>
        ) : (
          //false completion
          <TouchableOpacity onPress={props.onUpdate}>
            <Icon name="checkcircle" style={styles.completeBtn} />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={props.onDelete}>
          <Icon name="delete" style={styles.deleteBtn}></Icon>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
