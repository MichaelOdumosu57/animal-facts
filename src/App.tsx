// @ts-nocheck
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { animals } from './animals';



const title = "";

const displayFact = (e:Event)=>{
    const facts = animals[e.target.alt].facts 
    const chosenFact = facts[Math.floor(Math.random() * facts.length)]
    document.querySelector("#fact").innerHTML = chosenFact
}

// convert animats object to array
const images = Object.entries(animals)
.map((x,i)=>{
    let [keyx,valx] =x;
    let myObj =  {
        key:keyx,
        className:'animal',
        alt:keyx,
        src:valx.image,
        "aria-label":keyx,
        role:"button",
        onClick:displayFact
    }
    return <img {...myObj}/>

})
// 

const background = <img className="background" alt="ocean" src ="images/ocean.jpg"/>;
const showBackground = true;
const animalFacts = (
  <div>
      <h1>{title === "" ?"Click an animal for a fun fact" :title}</h1>
      {showBackground && background}
      <div className="animals">
          {images}
      </div>
      <p id ="fact"></p>
  </div>
);


function App() {
  return animalFacts
}

export default App;
