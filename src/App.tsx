import React, { FC, useState } from 'react';
import AddPizzaForm from "./components/AddPizzaForm";
import  DisplayPizza from "./components/DisplayPizza";
import Pizza from './models/Pizza';
import './App.css';


const App: FC = () => {
  // ф. для храниния данных
  const [pizzaList, setPizzaList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) =>{
    /**
     * При созд. новой пиццы мы созд. массив и копируем туда текущие пиццы
     * и добавлять туда нашу новую пиццу. Отправлять в переменную pizzaList
     */
     setPizzaList([...pizzaList, newPizza])
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzaList(pizzaList.map((pizza) => 
      (pizza.id === newPizza.id ? newPizza : pizza)));
  }

  const deletePizza = (id: number) =>{
    const newPizzaList = pizzaList.filter(pizza => pizza.id !== id);
    setPizzaList(newPizzaList);
  }

  console.log("pizzaList >>> ", pizzaList);

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">
          Пиццария
        </span>
        <AddPizzaForm
          addPizza={addPizza}
        />

        <DisplayPizza
          pizzaList={pizzaList}
          deletePizza={deletePizza}
          updatePizza={updatePizza}
        />
      </div>
    </div>
  );
}

export default App;
