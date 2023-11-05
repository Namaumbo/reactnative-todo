
import { Alert } from "react-native";
export class ItemServices {
    constructor(){}

    // item methods
 deleteItem(params) {
    Alert.alert("Delete item", "comfirm to delete item", [
        {
          text: "Delete",
          onPress: () => console.log("deleting"),
        },
         {
          text: "Cancel",
          onPress: () => console.log("Can't delete item"),
        },
      ]);  
 }
}
