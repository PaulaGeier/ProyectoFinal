import { renderCategories } from "./src/services/categories.js";
import { handleSearchProductByName } from "./src/services/searchBart.js";
import { openModal } from "./src/services/views/modal.js";
import { handleGetProductsToStore } from "./src/services/views/store.js";

/*=====APLICATION======*/

export let categoriaActiva=null;

export const setCategoriaActiva=(categoriaIn)=>{
    categoriaActiva=categoriaIn;
};

export let productoActivo=null;

export const setproductoActivo=(productoIn)=>{
    productoActivo=productoIn;
}



handleGetProductsToStore(); 
renderCategories();


//HEADER
const buttonAdd=document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click",()=>{
    openModal();
});

//buttonSearch

const buttonSearch= document.getElementById('header_buttonSearch');
buttonSearch.addEventListener("click",()=>{
    handleSearchProductByName();
})