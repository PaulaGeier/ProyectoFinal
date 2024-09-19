import { renderCategories } from "./src/services/categories.js";
import { setInLocalStorage } from "./src/services/persistence/localStorage.js";
import { handleGetProductsToStore } from "./src/services/views/store.js";

/*=====APLICATION======*/

handleGetProductsToStore(); 
renderCategories();

/*=====PRODUCT======*/

const buttonAdd=document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click",()=>{
    openModal();
});

/*=====POPUP======*/ 

const buttonCancel=document.getElementById("cancelButton");

buttonCancel.addEventListener("click",()=>{
    closeModal();
}); 

//FUNCIONES ABRIR Y CERRAR MODAL
const openModal=()=>{
    const modal=document.getElementById("modalPopUp");
    modal.style.display="flex";
};

const closeModal=()=>{
    const modal=document.getElementById("modalPopUp");
    modal.style.display="none";
};

//Guardar o modificar
const acceptButton =document.getElementById("acceptButton");
acceptButton.addEventListener("click",()=>{
    handleSaveModifyElements();
})

const handleSaveModifyElements=()=>{
    const nombre=document.getElementById("name").value,
    imagen=document.getElementById("img").value,
    precio=document.getElementById("precio").value,
    categories=document.getElementById("categoria").value; 

    let object={
        id:new Date().toISOString(),
        nombre,imagen,precio,categories,
    };
    console.log(object);
    setInLocalStorage(object);
    handleGetProductsToStore();  
    closeModal();
};