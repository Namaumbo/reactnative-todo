
import { Alert } from "react-native";

// to be converted to functional component setOriginalNode.
export class ItemServices {
    constructor(){}
    
    // item methods
 deleteItem(params) {
    Alert.alert("Delete item", "comfirm to delete item", [
         {
          text: "Cancel",
          onPress: () => console.log("Can't delete item"),
        },
        {
          text: "Delete",
          onPress: () => {
            Alert.alert('Successful')
        }
        },
      ]);  
 }
}
