import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./todoStyle";
import Icon from "react-native-vector-icons/AntDesign";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";
import { ItemPersistentStore } from "../../Persistence/Persistence";

export default function Todo() {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");
  const [notesInput, setNotesInput] = React.useState("");
  const [DatePickerVisibility, setDatePickerVisibility] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState(false);

  const itemPersistentStore = new ItemPersistentStore();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleInput = (e) => {
    setText(e);
  };
  const handleNotesInput = (e) => {
    setNotesInput(e);
  };

  const handleAdd = (e) => {
    if (text.trim() !== "") {
      const todoItem = {
        id: Math.floor(Math.random() * 999),
        title: text,
        notes: notesInput,
        date_added: date,
        completed: false,
      };
       itemPersistentStore.addItem(todoItem);
      Alert.alert("", "Item added successfully", [
        {
          text: "",
          onPress: () => {
            navigation.navigate("Home");
          },
        },
      ]);
    } else {
      alert("Please enter a task");
    }
  };

  const handleConfirm = (date) => {
    // this will handle the data
    const formattedDate = date.toISOString().split("T")[0];
    setDate(formattedDate);
    hideDatePicker();
  };

  const handleModalVisibilityChange = () => {
    if (notesInput.trim().length > 0) {
      setNotes(true);
    }
    setModalVisibility(!modalVisibility);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        onChangeText={handleInput}
        multiline={true} // Enables multi-line input
        numberOfLines={4}
      />
      <View>
        <View style={styles.dateContainer}>
          <TouchableOpacity onPress={showDatePicker} style={styles.pickDate}>
            <Icon name="calendar" style={styles.Icon}></Icon>
          </TouchableOpacity>
          <Text style={styles.datePlaceHolder}> {date && date.toString()}</Text>
        </View>
        <DateTimePickerModal
          isVisible={DatePickerVisibility}
          mode="Date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <View style={styles.dateContainer}>
          <TouchableOpacity
            onPress={handleModalVisibilityChange}
            style={styles.Notes}
          >
            <Icon name="filetext1" style={styles.Icon}></Icon>
          </TouchableOpacity>
          <View style={styles.modalContainer}>
            <Modal
              visible={modalVisibility}
              animationType="fade"
              transparent={true}
              onRequestClose={handleModalVisibilityChange}
              statusBarTranslucent={true}
              style={styles.modals}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={{ backgroundColor: "white", padding: 10 }}>
                  <Text> Task notes</Text>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Enter notes"
                    onChangeText={handleNotesInput}
                    multiline={true}
                    numberOfLines={3}
                  />
                  <TouchableOpacity
                    title="Close Modal"
                    onPress={handleModalVisibilityChange}
                    style={styles.Notes}
                  >
                    <Text style={styles.txt}>Save and Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <Text style={styles.notesTxt}>{notes ? "Notes Added" : ""}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={handleAdd}>
          <Text style={styles.txt}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
