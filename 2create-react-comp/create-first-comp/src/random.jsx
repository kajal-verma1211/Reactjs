function Random(){

    const number = Math.random()*100;
   return <h1 style={{'background-color':'#776691'}}>
    Random no. is : {Math.round(number)}
     </h1>
}

export default Random;
