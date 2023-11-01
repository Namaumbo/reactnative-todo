import React from "react";
import { Text, View, TouchableOpacity, Alert, ScrollView } from "react-native";
import styles from "./homeStyle";
import Icon from "react-native-vector-icons/AntDesign";
import Item from "../item/Item";

export default function Home({ navigation }) {
  const handleAdd = () => {
    navigation.navigate("Todo");
  };
  const arr = [
    {
      title: "one",
    },
    {
      title: "two",
    },
    {
      title: "three",
    },
    {
      title: "one",
    },
    {
      title: "two",
    },
    {
      title: "three",
    },
    
  ];
  return (
    <>
      <View>
        <View style={styles.content}> 
          <Text style={styles.text}> Welcome back, Daeloh 👋 </Text>
          <Text style={styles.description}> complete remaining tasks</Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.stats}>
            <Text style={styles.headings}>complete</Text>
            <Text style={styles.numbers}>3</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.headings}>incomplete</Text>
            <Text style={styles.numbers}>4</Text>
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

      </View>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.item}>
          {arr.map((x, index) => {
            return (
              <View key={index}>
                <Item item={x.title} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}