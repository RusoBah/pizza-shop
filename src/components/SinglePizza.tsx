import React, { FC, useState } from 'react';
import Pizza from '../models/Pizza';
import EditPizzaForm from "./EditPizzaForm";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";



interface SinglePizzaProps{
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void; 
}
//
const SinglePizza:FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) =>{
    const [edit, setEdit] = useState<boolean>(false);

    const handleTaggleEdit = () =>{
        setEdit(!edit);
    }

    const handleDelete = () =>{
        deletePizza(pizza.id);
    }

    return(
        <div className="pizza">
            
            <img src={`/images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₽</span>
            <div className="pizza-controls">
            <FaEdit onClick={handleTaggleEdit}/>
            <RiDeleteBin6Fill onClick={handleDelete} />
            </div>

            {edit ? <EditPizzaForm handleTaggleEdit={handleTaggleEdit} updatePizza={updatePizza} data={pizza}/> : null}
     
        </div>
    );
}




export default SinglePizza;