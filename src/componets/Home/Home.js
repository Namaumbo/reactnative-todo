import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Alert, ScrollView, Button } from "react-native";
import styles from "./homeStyle";
import Icon from "react-native-vector-icons/AntDesign";
import Item from "../item/Item";
import { ItemPersistentStore } from "../../Persistence/Persistence";
import { useIsFocused } from '@react-navigation/native';

export default function Home({ navigation }) {
  const item = new ItemPersistentStore()
  const isFocused = useIsFocused(); 

  const handleAdd = () => {
    navigation.navigate("Todo");
  };
  const [ arr , setArr] = useState([])

 
  const fetch = () =>{
    item.getItems().then((data)=>{
      console.log(data)
      setArr(data)
    }).catch((err)=>{console.log(err)});

  }
  useEffect(()=>{
    if (isFocused){
      fetch()

    }
  },[isFocused])
  return (
    <>
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

      </View>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.item}>
          {arr.map((x, index) => {
            return (
              <View key={index}>
                <Item item={x.title} itemDetails ={x} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
