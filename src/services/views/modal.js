

import { productoActivo, setproductoActivo } from "../../../main.js";
import { handleDeleteProduct } from "../product.js";

/*=====POPUP======*/

const buttonCancel=document.getElementById("cancelButton");
buttonCancel.addEventListener("click",()=>{
    closeModal();
}); 


//FUNCIONES ABRIR Y CERRAR MODAL
export const openModal=()=>{
    const modal=document.getElementById("modalPopUp");
    modal.style.display="flex";
    const buttonDelete=document.getElementById('deleteButton');
    if(productoActivo){
        buttonDelete.style.display="block";
    }else{
        buttonDelete.style.display="none"
    }

    if (productoActivo) {
        const nombre=document.getElementById("name"),
        imagen=document.getElementById("img"),
        precio=document.getElementById("precio"),
        categories=document.getElementById("categoria");
        nombre.value=productoActivo.nombre;
        imagen.value=productoActivo.imagen;
        precio.value=productoActivo.precio;
        categories.value=productoActivo.categories;
    }
};

export const closeModal=()=>{
    const modal=document.getElementById("modalPopUp");
    modal.style.display="none";
    setproductoActivo(null);
    resetModal();
};
const resetModal = () =>{
    const nombre=document.getElementById("name"),
        imagen=document.getElementById("img"),
        precio=document.getElementById("precio"),
        categories=document.getElementById("categoria");
    nombre.value="Seleccione una categoria";
    imagen.value="";
    precio.value=0;
    categories.value="";
};


const deleteButton= document.getElementById("deleteButton");
deleteButton.addEventListener('click',()=>{
    handleButtonDelete();
})
const handleButtonDelete=()=>{
    handleDeleteProduct();
}

