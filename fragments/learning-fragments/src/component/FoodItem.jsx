import Item from "./item";

const FoodItems =({items})=>{
   
    return (
    <ul className="list-group">
    {items.map((item)=>(
       <Item key ={item} fooditems={item}></Item>
    ))}
    
  </ul>
    )
};

export default FoodItems;