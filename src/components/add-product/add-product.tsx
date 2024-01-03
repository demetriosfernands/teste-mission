'use client'
import {FormEvent, useState} from "react";
import {useTodos} from "@/store/todos";
import "./add-product.css";

export function AddProduct() {

 const[product, setProduct ] = useState("");

 const { handleAddTodo} = useTodos();

 function handleFormSubmit (e:FormEvent<HTMLFormElement>){
     e.preventDefault();
     handleAddTodo(product)
     setProduct("");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Nome" required value={product} onChange={(e) => setProduct(e.target.value)} />
            <input type="text" placeholder="Valor" required value={product} onChange={(e) => setProduct(e.target.value)} />
            <button type="submit">Adicionar produto</button>
        </form>
    )
}

export  default  AddProduct;
