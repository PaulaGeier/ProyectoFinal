import { categoriaActiva } from "../../main.js";
import { hadleGetProductLocalStorage } from "./persistence/localStorage.js";
import { hadleRenderList } from "./views/store.js";

/*==============CATEGORIA===========*/
const handlefilterProductsByCategory=(categoryIn)=>{
    const products=hadleGetProductLocalStorage();

    switch (categoryIn) {
        case categoriaActiva:
            hadleRenderList(products);
            break;
        case "Todos":
            hadleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el)=> el.categories === categoryIn);
            hadleRenderList(result);
        default:
            break;
        case "mayorPrecio":
            const resultPrecioMayor =products.sort((a,b)=>b.precio -a.precio);
            hadleRenderList(resultPrecioMayor);
        break;
        case "menorPrecio":
            const resultPrecioMenor =products.sort((a,b)=>a.precio -b.precio);
            hadleRenderList(resultPrecioMenor);
        break;
    }
}

//Render de la vista categories

export const renderCategories=()=>{
    //Tomamos elementos de la lista
    const ulList= document.getElementById("listFilter");
    //Creamoa los elemetneos de la lista
    ulList.innerHTML = `
    <li id="Todos">Todos los productos </li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas" >Gaseosas</li> 
    <li id="mayorPrecio" >Mayor Precio</li> 
    <li id="menorPrecio" >Menor Precio </li>`;

    //Añadimos dinamicamente el evento click
    const liElements= ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener("click",()=>{
            handleClick(liElement);
        });
    });

    //Verificamos y manejamos el estilo del elemento acctivo
    const handleClick= (elemento)=>{
        handlefilterProductsByCategory(elemento.id);
        liElements.forEach((el)=>{
            if(el.classList.contains('liActive')){
                el.classList.remove("liActive");
            }else{
                if(elemento===el){
                    el.classList.add("liActive");

                }
            }
        });
    };
};
