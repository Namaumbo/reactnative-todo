import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./itemstyle";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { ItemServices } from "../../Services/ItemServices";
import { useRecoilState } from "recoil";
import { itemAtom } from "../../Appstates/AppStates";

export default function Item(props) {
  const navigation = useNavigation();
  const itemMethods = new ItemServices();
  // const [refresh, setRefresh] = useRecoilState(itemAtom);


  // const onDelete = (id) => {
  //   itemMethods.deleteItem(id);
  //   setRefresh(true);
  // };
  return (
    <TouchableOpacity
      style={props.itemDetails.completed ? styles.completed : styles.incomplete}
      onPress={() =>
        navigation.navigate("Details", { item: props.itemDetails })
      }
    >
      <Text style={styles.item}>{props.item}</Text>
      <View style={styles.Btns}>
        <TouchableOpacity style={styles.complete}>
          {props.itemDetails.completed ? (
            <Icon name="reload1" style={styles.incompleteBtn} />
          ) : (
            <Icon name="checkcircle" style={styles.completeBtn} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onDelete}>
          <Icon name="delete" style={styles.deleteBtn}></Icon>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
