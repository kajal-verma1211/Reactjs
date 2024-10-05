import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";

import ToDoItems from "./components/ToDoItems";

function App() {

   const todoItems = [{
    name : 'Buy Milk',
    dueDate: 4/10/2023,
   },
   {
    name : 'Go to College',
    dueDate: 4/10/2023,
   }];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <ToDoItems todoItems={todoItems}></ToDoItems>
      
    </center>
  );
}

export default App;
