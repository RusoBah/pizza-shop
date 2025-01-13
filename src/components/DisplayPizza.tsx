import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from '../components/SinglePizza';

interface DisplayPizzaProps{
    pizzaList: Pizza[];
    updatePizza: (newPizza: Pizza) => void; 
    deletePizza: (id:number) => void;
}

const DisplayPizza:FC<DisplayPizzaProps> = ({pizzaList, updatePizza, deletePizza}) =>{
    return(
        <div className="container">
            {pizzaList.map((pizza) =>{
                return <SinglePizza deletePizza={deletePizza} updatePizza={updatePizza} key={pizza.id} pizza={pizza} />
            })}
        </div>
    );
}




export default DisplayPizza;