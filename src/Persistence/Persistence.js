
import AsyncStorage from '@react-native-async-storage/async-storage';
 function persistent(){

    // ----------------------------add item--------------------------------- 
    const addItem = (item) =>{
        const todos = AsyncStorage.getItem("todos") || [];
        const res = {};
        if (todos == null){
            try {
                todos.push(item);
                const _todoList = JSON.stringify(todos);
                AsyncStorage.setItem("todos", _todoList);
                res['message'] = 'item added successfully'
            } catch (error) {
                res['message'] = 'error creating item'
            }
         
        };
        return res
    }

    // ---------------------------get item---------------------------------
    const getItems = () =>{
        try {
            const items  =  JSON.parse(AsyncStorage.getItem('todos')) || [];
            return items;
        } catch (error) {
            console.error('Error getting to-dos:', error);
            return [];
        }
    }
    // --------------------------------update todo-------------------------------
    const updateTodo = async (todoId, completed) => {
        try {
          const todos = JSON.parse(await AsyncStorage.getItem('todos')) || [];
          const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
              return { ...todo, completed };
            }
            return todo;
          });
      
          await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
          console.error('Error updating to-do:', error);
        }
      };
      
      //---------------------------Delete a to-do item----------------------------
      const deleteTodo = async (todoId) => {
        try {
          const todos = JSON.parse(await AsyncStorage.getItem('todos')) || [];
          const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      
          await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
          console.error('Error deleting to-do:', error);
        }
      };


}

    export default persistent