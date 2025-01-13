import React, { FC, useState, ChangeEvent, FormEvent} from 'react';
import "./styles.css";
import Pizza from '../models/Pizza';


interface AddPizzaFormProps{
    addPizza: (newPizza: Pizza) => void;
}

const initState ={
    title: "",
    price: "",
    img:"",
}



const AddPizzaForm: FC<AddPizzaFormProps> = ({addPizza}) =>{
    /*
    *   Базовое состояние
    */
    const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string}>(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        
        // Получаем название с каждого поля
        const {name, value} = e.target;
      
        setNewPizza({
            // Копируем текущие состояние
            ...newPizza,
            // Обновляем значение полей
            [name]: value
        });

    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const {title, price, img} = newPizza;

        if(title && price && img){
            addPizza({
                title,
                img,
                price: Number(price),
                id: Date.now()
            });
            setNewPizza(initState);
        }else{
            alert("Данные введены не полностью");
        }
    }

    console.log(newPizza);

    return(
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder='Название пиццы' onChange={handleChange} value={newPizza.title}/>
          
            <input name="price" type="text" placeholder='Стоимость' onChange={handleChange} value={newPizza.price}/>
          
            <input name="img" type="text" placeholder='Изображение' onChange={handleChange} value={newPizza.img}/>
         
            <button type="submit">
            + Добавить в меню
            </button>
            
        </form>
    )
}

export default AddPizzaForm;