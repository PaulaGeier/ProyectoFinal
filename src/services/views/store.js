/*==========STORE========== */

import { hadleGetProductLocalStorage } from "../persistence/localStorage.js"

//funcion que encarga de traer elementos y llamar al render
export const handleGetProductsToStore=()=>{
    const products=hadleGetProductLocalStorage();
    hadleRenderList(products);
};

//se encarga de filtrar y renderizar la seccion  con todos sus respectivos elementos
export const hadleRenderList=(productosIn)=>{

    //filtrado de array por categoria
    const burguers=productosIn.filter((el)=>el.categories==="Hamburguesas");
    const papas=productosIn.filter((el)=>el.categories==="Papas");
    const gaseosas=productosIn.filter((el)=>el.categories==="Gaseosas");
//renderiza los elementos de la seccion
    const renderProductGroup=(productos, title)=>{
        if (productos.length>0) {
            const productoHTML = productos.map((producto,index)=>{
                return `<div id='product-${producto.categories}-${index}'>
                <div class='containerTargetItem'>
                <img src='${producto.imagen}'/>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div>
                <p><b>Precio </b>$ ${producto.precio}</p> 
                <p><b>Categoria </b>${producto.categories}</p> 
                </div>
                </div>
                </div>`

            })
            //retorna la funcion
            return `
                <section class='sectionStore'>
                <h3>${title}</h3>
                <div class='containerProductStore'>
                ${productoHTML.join("")}
                </div>
                </section>
            `;
        }else{
            return"";
        }
    };
    //renderizar cada uno de los productos dentro de su categoria
    const appContainer=document.getElementById("storeContainer");
    appContainer.innerHTML=`
    ${renderProductGroup(burguers,"Hamburguesas")}
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}
    `;


    //se añaden los eventos de manera dinamica
    const addEvents =(productsIn)=>{
        if (productsIn) {
            productsIn.forEach((element,index)=>{
                const productContainer=document.getElementById(`product-${element.categories}-${index}`

                );
                productContainer.addEventListener("click",()=>{
                    console.log("productoActivo", element);
                    
                })
                
            })
        }

    };
    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
    
};
