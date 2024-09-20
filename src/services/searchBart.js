import { hadleGetProductLocalStorage } from "./persistence/localStorage.js";
import { hadleRenderList } from "./views/store.js";

export const handleSearchProductByName=()=>{
    const inputHeader = document.getElementById('inputHeader');
    const products=hadleGetProductLocalStorage();

    const result =products.filter((el)=>

    el.nombre.toLowerCase().includes(inputHeader.value)
    );
    hadleRenderList(result);
}