import styles from "./Item.module.css"

const Item =({fooditems})=>{
 return (
    <li  className ={`${styles['kg-item']} list-group-item kg-item`}>
      <span className={styles["kg-span"]}>{fooditems}</span></li>
 )
};

export default Item;