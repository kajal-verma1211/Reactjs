import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import FoodItems from "./component/FoodItem";
import ErrorMessage from "./component/errorMessage";


function App() {
    const fooditems=["Sabji","Green vegetable","Roti","Salad","Milk","Ghee"];
  return (
   <>

      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items = {fooditems}></ErrorMessage>
      <FoodItems items = {fooditems}></FoodItems>
   </>
  );
}

export default App;
