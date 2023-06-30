import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function Pizza ({pizza}) {
  const {name, ingredients, price, photoName} = pizza;
  return (
    <li className='pizza'>
      <img 
        src={photoName}
        alt={name}/>
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>{price + 3}</span>
        </div>
    </li>
  );
}

function Header () {
  return (
    <header className='header'>
      <h1>Fast React pizza Co.</h1>
    </header>
  );
}
const pizzas = pizzaData.map(pizza => {
  return (<Pizza
          pizza={pizza}/>);
});
function Menu () {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <ul className='pizzas'>
        {pizzas}
      </ul>
    </main>
  );
}

function Footer () {
  const openHour = 12,
        closeHour = 22,
        hour = new Date ().getHours();
  const isOpen = hour >= openHour && hour < closeHour;
  return (
          <footer className='footer'>
            {isOpen && (
              <div className='order'>
                <p>
                  We're open until {closeHour}:00. Come visit Us or order online.
                </p>
                <button className='btn'>
                  Order
                </button>
              </div>
            )}
          </footer>
        );
}

function App() {
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}

// React V18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

/*
  Before React 18
  ReactDOM.render(<App/>, document.getElementById("root"));
*/