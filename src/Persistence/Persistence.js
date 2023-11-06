import AsyncStorage from "@react-native-async-storage/async-storage";

export class ItemPersistentStore {
  // ----------------------------add item---------------------------------
  constructor() {}

  addItem = async (item) => {

    res ={ }
      try {
        const todosJson = await  AsyncStorage.getItem('todos') ;
        const todos  = JSON.parse(todosJson) 
        todos.push(item);
        const _todoList = JSON.stringify(todos);
        await AsyncStorage.setItem("todos", _todoList);
        res['message'] = 'Item added successfully'
        res['status'] = 'success'
      } catch (error) {
        res['message'] = error
        res['status'] = 'error'
      }
    
      return res
  };

  // ---------------------------get item---------------------------------
  getItems = async () => {
    try {
        const todosJSON = await AsyncStorage.getItem('todos');
        const todos = todosJSON ? JSON.parse(todosJSON) : [];
        
        return todos;
      } catch (error) {
        console.error('Error getting to-dos:', error);
        return [];
      }
  };
  // --------------------------------update todo-------------------------------
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
    try {
      const todos = JSON.parse(await AsyncStorage.getItem("todos")) || [];
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);

      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
    } catch (error) {
      console.error("Error deleting to-do:", error);
    }
  };
}
