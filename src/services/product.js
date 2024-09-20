
//==============PRODUCTOS=============

import { productoActivo } from "../../main.js";
import { hadleGetProductLocalStorage, setInLocalStorage } from "./persistence/localStorage.js";
import { closeModal } from "./views/modal.js";
import { hadleRenderList, handleGetProductsToStore } from "./views/store.js";


//Guardar o modificar
const acceptButton =document.getElementById("acceptButton");
acceptButton.addEventListener("click",()=>{
    handleSaveModifyElements();
})

//Funcion de guardar
const handleSaveModifyElements=()=>{
    const nombre=document.getElementById("name").value,
    imagen=document.getElementById("img").value,
    precio=document.getElementById("precio").value,
    categories=document.getElementById("categoria").value; 
    let object=null;
    if (productoActivo) {
        object={
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories,
        }
    }else{
        object={
            id:new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
        };
    }
    setInLocalStorage(object);    
    handleGetProductsToStore();  
    closeModal();
};

//Eliminar elemento
export const handleDeleteProduct=()=>{


    
    const products= hadleGetProductLocalStorage();
    const result=products.filter((el)=>el.id !== productoActivo.id);
    //setear el nuevo array
    localStorage.setItem("products",JSON.stringify(result));
    const newProducts=hadleGetProductLocalStorage();
    hadleRenderList(newProducts);
    closeModal();
}