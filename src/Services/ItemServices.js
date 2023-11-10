import { Alert } from "react-native";
import { ItemPersistentStore } from "../Persistence/Persistence";
export class ItemServices {
  itemPersistentStore = new ItemPersistentStore();

  deleteItem(id) {
    Alert.alert("Delete item", `comfirm to delete item `, [
      {
        text: "Cancel",
        onPress: () => console.log("Can't delete item"),
      },
      {
        text: "Delete",
        onPress: () => {
          this.itemPersistentStore.deleteTodo(id);
          Alert.alert("Successful");
        },
      },
    ]);
  }
}
