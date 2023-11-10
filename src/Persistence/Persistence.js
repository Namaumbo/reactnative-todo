import AsyncStorage from "@react-native-async-storage/async-storage";
import { itemAtom } from "../Appstates/AppStates";
import {useRecoilState} from 'recoil'

export class ItemPersistentStore {
  // ----------------------------add item---------------------------------
  
  addItem = async (item) => {
    let res = {};
    try {
      const todosJson = await AsyncStorage.getItem("todos");
      const todos = JSON.parse(todosJson);
      // O(n)
      todos.unshift(item);
      const _todoList = JSON.stringify(todos);
      await AsyncStorage.setItem("todos", _todoList);
      console.log('here')
      res["message"] = "Item added successfully";
      res["status"] = "success";
    } catch (error) {
      res["message"] = error;
      res["status"] = "error";
    }

    return res;
  };

  // ---------------------------get item---------------------------------
  getItems = async () => {
    const items = {};
    try {
      const todosJSON = await AsyncStorage.getItem("todos");
      const todos = todosJSON ? JSON.parse(todosJSON) : [];
      items['todos'] = todos;
      items['status'] = 'success';
    } catch (error) {
      console.error("Error getting to-dos:", error);
      items['todos'] = [];
      items['status'] = 'error';
    }
    return items;
  }
  // --------------------------------update to do-------------------------------
  updateTodo = async (todoId, completed) => {
    try {
      const todos = JSON.parse(await AsyncStorage.getItem("todos")) || [];
      const updatedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed };
        }
        return todo;
      });

      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
    } catch (error) {
      console.error("Error updating to-do:", error);
    }
  };

  //---------------------------Delete a to-do item----------------------------
  deleteTodo = async (todoId) => {
    res = {}
    try {
      let todos = JSON.parse(await AsyncStorage.getItem("todos")) || [];
      todos = todos.filter((todo) => todo.id !== todoId);
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
      res["todos"] = todos
     } catch (error) {
      console.error("Error deleting to-do:", error);
      res['todos'] = null;
    }
    return res;
  };
}
