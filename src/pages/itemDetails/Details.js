import React from "react";
import { View, Text ,TouchableOpacity} from "react-native"
// import Icon from 'react-native-vector-icons/AntDesign'

import detailsStyles from "./detailStyle";

export default function Details({ route }) {
  const { item } = route.params;
  return (
    <View style={detailsStyles.main}>
      <Text style={detailsStyles.title}>{item.title}</Text>
      <Text style={detailsStyles.date}>Wednesday, 03-11-2023</Text>
      <Text style={detailsStyles.desc}>Notes</Text>
      <Text>{item.details}</Text>
      <View style={detailsStyles.btns}>
        <TouchableOpacity style={detailsStyles.btn}>
    <Text style={detailsStyles.comp}>Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={detailsStyles.del}>
    <Text style={detailsStyles.comp}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
