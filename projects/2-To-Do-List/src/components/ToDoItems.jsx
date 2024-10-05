import ToDoItem from "./ToDoItem";
import styles from './ToDoItems.module.css'

const ToDoItems =({todoItems})=>{
    return (
    <div className = {styles.itemsContainer}>
        {todoItems.map((item)=>(
          <ToDoItem key={item.name} todoDate={item.dueDate} todoName={ item.name}></ToDoItem>
        ))}
      </div>
    )
}

export default ToDoItems;