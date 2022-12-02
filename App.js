import './App.css';
import { useEffect, useState } from "react";
import {StoreItem} from "./components/StoreItem"
import {ShowCart} from "./components/ShowCart"
const storeData = [
  {
    "name": "Messi Barcelona Jersey",
    "type": "Jersey",
    "team": "Barcelona",
    "price": 147.99,
    "image": "messijersey.png",
    "popularity": 99
  },
  {
    "name": "Lewandowski Barcelona Jersey",
    "type": "Jersey",
    "team": "Barcelona",
    "price": 139.99,
    "image": "lewandowskijersey.png",
    "popularity": 76
  },
  {
    "name": "Nike Barcelona Vector Cleats",
    "type": "Shoe",
    "team": "Barcelona",
    "price": 122.99,
    "image": "barcelonacleats.jfif",
    "popularity": 17
  },
  {
    "name": "Barcelona Ball",
    "type": "Ball",
    "team": "Barcelona",
    "price": 25.99,
    "image": "barcelonaball.png",
    "popularity": 52
  },
  {
      "name": "Ronaldo Manchester United Jersey",
      "type": "Jersey",
      "team": "Manchester United",
      "price": 144.99,
      "image": "ronaldojersey.png",
      "popularity": 95
    },
    {
      "name": "Rashford Manchester United Jersey",
      "type": "Jersey",
      "team": "Manchester United",
      "price": 119.99,
      "image": "rashfordjersey.png",
      "popularity": 48
    },
    {
      "name": "Nike Manchester United Venom Cleats",
      "type": "Shoe",
      "team": "Manchester United",
      "price": 109.99,
      "image": "mancheterunitedcleats.jfif",
      "popularity": 77
    },
    {
      "name": "Manchester United Ball",
      "type": "Ball",
      "team": "Manchester United",
      "price": 22.99,
      "image": "mancheterunitedball.jfif",
      "popularity": 55
    },
    {
      "name": "Neymar PSG Jersey",
      "type": "Jersey",
      "team": "PSG",
      "price": 135.99,
      "image": "neymarjersey.png",
      "popularity": 88
    },
    {
      "name": "Mbappe PSG Jersey",
      "type": "Jersey",
      "team": "PSG",
      "price": 137.99,
      "image": "mbappejersey.png",
      "popularity": 86
    },
    {
      "name": "Nike PSG Anchor Cleats",
      "type": "Shoe",
      "team": "PSG",
      "price": 114.99,
      "image": "psgcleats.png",
      "popularity": 67
    },
    {
      "name": "PSG Ball",
      "type": "Ball",
      "team": "PSG",
      "price": 23.99,
      "image": "psgball.png",
      "popularity": 45
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
  const [sort, setSort] = useState("By Team")
  const [data, setData] = useState(storeData);

  function updateType(e){
    let obj = e.target.value
    setType(obj)
  }
  useEffect(()=>{
    const newData = handleType(type, storeData)
    const finallData = handleTeam(team, newData)
    const finalData = handleSort(sort, finallData)
    setData(finalData)
  },[type, team, sort])
  function updateTeam(e){
    let obj = e.target.value
    setTeam(obj)
  }
  // useEffect(()=>{
  //   const newData = handleType(type, storeData)
  //   const finallData = handleTeam(team, newData)
  //   const finalData = handleSort(sort, finallData)
  //   setData(finalData)
  // },[team])
  function updateSort(e){
    let obj = e.target.value
    setSort(obj)
    const newdata = handleSort(obj, data)
    setData(newdata)
  }
  // useEffect(()=>{
  //   const newData = handleSort(sort, data)
  //   setData(newData)
  // },[sort])

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
  
  function handleType(type, data){
    setType(type)
    if (type === "All"){
      return data
    }
    else{
      const newData = data.filter(each =>{
        return each.type === type
      })
      return newData
    }
  }
  function handleTeam(team, data){
    setTeam(team)
    if (team === "All"){
      return data
    }
    else{
      const newData = data.filter(each =>{
        return each.team === team
      })
      return newData
    }
  }
  function handleSort(sort, data){
    setSort(sort)
    if (sort === "By Team"){
      const newdata = data.sort((a,b)=>(a.team < b.team ? -1 : 1))
      return newdata
    }
    if (sort === "Price"){
      const newdata =data.sort((a,b)=>(a.price < b.price ? -1 : 1))
      return newdata
    }
    if (sort === "Popularity"){
      const newdata =data.sort((a,b)=>(a.popularity > b.popularity ? -1 : 1))
      return newdata
    }
  }

  return (
    <div className="App">
      <h1>My Store</h1> {}
      <div class="flex-container">
        <div class="left">
        <p>Sort</p>
          <button value="By Team" onClick={updateSort}>By Team</button>
          <button value="Price" onClick={updateSort}>Price</button>
          <button value="Popularity" onClick={updateSort}>Popularity</button>
          <p>Types</p>
          <button value="All" onClick={updateType}>All</button>
          <button value="Jersey" onClick={updateType}>Jerseys</button>
          <button value="Ball" onClick={updateType}>Balls</button>
          <button value="Shoe" onClick={updateType}>Cleats</button>
          <p>Teams</p>
          <button value="All" onClick={updateTeam}>All</button>
          <button value="Barcelona" onClick={updateTeam}>Barcelona</button>
          <button value="Manchester United" onClick={updateTeam}>Manchester United</button>
          <button value="PSG" onClick={updateTeam}>PSG</button>
        </div>
        <div class="middle">
        {data.map((item, index) => ( 
        <StoreItem item = {item} handleClick={handleClick}/>
        ))}
        </div>
        <div class="right">
          <h2>Favorites</h2>
          <ul>
            {cart.map(item =>{
            return <li key={item}>{item}</li>
            })} </ul>
          <p>Total Price</p>
          <p>{price}</p>
          
        </div>
      </div>
    </div>
  );
}

export default App;
