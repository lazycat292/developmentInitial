import './App.css';
import { useEffect, useState } from "react";
import {StoreItem} from "./components/StoreItem"
import {HandleFilter} from "./components/HandleFilter"
const storeData = [
  {
    "name": "Messi Barcelona Jersey",
    "type": "Jersey",
    "team": "Barcelona",
    "price": 147.99,
    "image": "messijersey.png",
    "buttontext": "Add to Favorites"
  },
  {
    "name": "Lewandowski Barcelona Jersey",
    "type": "Jersey",
    "team": "Barcelona",
    "price": 139.99,
    "image": "lewandowskijersey.png",
    "buttontext": "Add to Favorites"
  },
  {
    "name": "Nike Barcelona Vector Cleats",
    "type": "Shoe",
    "team": "Barcelona",
    "price": 122.99,
    "image": "barcelonacleats.jfif",
    "buttontext": "Add to Favorites"
  },
  {
    "name": "Barcelona Ball",
    "type": "Ball",
    "team": "Barcelona",
    "price": 25.99,
    "image": "barcelonaball.png",
    "buttontext": "Add to Favorites"
  },
  {
      "name": "Ronaldo Manchester United Jersey",
      "type": "Jersey",
      "team": "Manchester United",
      "price": 144.99,
      "image": "ronaldojersey.png",
      "buttontext": "Add to Favorites"
    },
    {
      "name": "Rashford Manchester United Jersey",
      "type": "Jersey",
      "team": "Manchester United",
      "price": 119.99,
      "image": "rashfordjersey.png",
      "buttontext": "Add to Favorites"
    },
    {
      "name": "Nike Manchester United Venom Cleats",
      "type": "Shoe",
      "team": "Manchester United",
      "price": 109.99,
      "image": "mancheterunitedcleats.jfif",
      "buttontext": "Add to Favorites"
    },
    {
      "name": "Manchester United Ball",
      "type": "Ball",
      "team": "Manchester United",
      "price": 22.99,
      "image": "mancheterunitedball.jfif",
      "buttontext": "Add to Favorites"
    },
    {
      "name": "Neymar PSG Jersey",
      "type": "Jersey",
      "team": "PSG",
      "price": 135.99,
      "image": "neymarjersey.png",
      "buttontext": "Add to Favorites"
    },
    {
      "name": "Mbappe PSG Jersey",
      "type": "Jersey",
      "team": "PSG",
      "price": 137.99,
      "image": "mbappejersey.png",
      "buttontext": "Add to Favorites"
    },
    {
      "name": "Nike PSG Anchor Cleats",
      "type": "Shoe",
      "team": "PSG",
      "price": 114.99,
      "image": "psgcleats.png",
      "buttontext": "Add to Favorites"
    },
    {
      "name": "PSG Ball",
      "type": "Ball",
      "team": "PSG",
      "price": 23.99,
      "image": "psgball.png",
      "buttontext": "Add to Favorites"
    }
  
]
storeData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [list, setList] = useState({});
  const [type, setType] = useState("All");
  const [team, setTeam] = useState("All");
  const [data, setData] = useState(storeData);

  function handleClick(name, cost){
    if (list[name]===1){
      const filteredcart = cart.filter((item) =>{
        return item !== name
      })
      setCart(filteredcart)
      const filteredlist = list
      filteredlist[name] = 0
      setList(filteredlist)
      setPrice(price-cost)
    }
    else{
      setCart([...cart, name])
      setPrice(price+cost)
      const newlist = list
      newlist[name] = 1
      setList(newlist)
    } 
  }
  
  function handleType(e){
    let obj = e.target.value
    setType(obj =>{
      return obj
    })
    if (obj === "All"){
      setData(storeData)
    } 
    else{
      const newData = storeData.filter(each => {
        return each.type === obj})
      setData(newData)
    }

    if(team !== "All"){
    const finalData = data.filter(each=> {
      return each.team === team})
    setData(finalData)
    }
  }
  function handleTeam(e){
    let obj = e.target.value
    setTeam(obj=>{
      return obj
    })
    if (obj === "All"){
      setData(storeData)
    } 
    else{
      const newData = storeData.filter(each => {
        return each.team === obj})
      setData(newData)
    }
    if(type !== "All"){
    const finalData = data.filter(each=> {
      return each.type === type})
    setData(finalData)
    }
  }

  return (
    <div className="App">
      <h1>My Store</h1> {}
      <div class = "flex-container">
        <div>
          <p>Types</p>
          <button value="All" onClick={handleType}>All</button>
          <button value="Jersey" onClick={handleType}>Jerseys</button>
          <button value="Ball" onClick={handleType}>Balls</button>
          <button value="Shoe" onClick={handleType}>Cleats</button>
          <p>Teams</p>
          <button value="All" onClick={handleTeam}>All</button>
          <button value="Barcelona" onClick={handleTeam}>Barcelona</button>
          <button value="Manchester United" onClick={handleTeam}>Manchester United</button>
          <button value="PSG" onClick={handleTeam}>PSG</button>
        </div>
        <div>
        {data.map((item, index) => ( 
        <StoreItem item = {item} handleClick={handleClick}/>
        ))}
        </div>
        <div>
          <h2>Favorites</h2>
          
          <p>{cart}</p>
          <p>{price}</p>
          
        </div>
      </div>
    </div>
  );
}

export default App;
