import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
} from "react-native";
import styles from "./homeStyle";
import Icon from "react-native-vector-icons/AntDesign";
import Item from "../item/Item";
import { ItemPersistentStore } from "../../Persistence/Persistence";
import { useIsFocused } from "@react-navigation/native";
import { itemAtom } from "../../Appstates/AppStates";
import { useRecoilState } from "recoil";

export default function Home({ navigation }) {
  const item = new ItemPersistentStore();
  const isFocused = useIsFocused();

  const handleAdd = () => {
    navigation.navigate("Todo");
  };
  const [arr, setArr] = useState([]);


  const handleDelete = (id) => {
    let items =  item.deleteTodo(id)
    items.then(rs =>{
      setArr(rs['todos'])
    }).catch(err =>{Alert.alert(err)})
  }
  const fetch = () => {
    item
      .getItems()
      .then((data) => {
        setArr(data["todos"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (isFocused) {
      fetch();
    }
  }, [isFocused]);

  check = () => {
    item
      .getItems()
      .then((items) => {
        console.log("=>",items["todos"]);
      })
      .catch((err) => {});
  };
  
  return (
    <View style={styles.main}>
        <View style={styles.content}>
          <Text style={styles.text}> Hi, Daeloh 👋 </Text>
          <Text style={styles.description}> complete remaining tasks</Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.stats}>
            <Text style={styles.headings}>complete</Text>
            <Text style={styles.numbers}>3</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.headings}>incomplete</Text>
            <Text style={styles.numbers}>{arr.length}</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.headings}>overdue</Text>
            <Text style={styles.numbers}>1</Text>
          </View>
        </View>
        <View style={styles.btnCon}>
          <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
            <Icon name="plus" style={styles.addTxt}></Icon>
          </TouchableOpacity>
        </View>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.item}>
          {arr.map((x, index) => {
            return (
             <View key={index}>
                <Item
                  item={x.title}
                  itemDetails={x}
                  onDelete={() => handleDelete(x['id'])}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <Button onPress={check} title="check"></Button>
      </View>
  );
}
