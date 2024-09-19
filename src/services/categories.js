//Render de la vista categories

export const renderCategories=()=>{
    //Tomamos elementos de la lista
    const ulList= document.getElementById("listFilter");
    //Creamoa los elemetneos de la lista
    ulList.innerHTML = '<li id="todos">Todos los productos </li> <li id="papas" >Papas</li><li id="gaseosas" >Gaseosas</li> <li id="mayoPrecio" >Mayor Precio</li> <li id="menorPrecio" >Menor Precio </li>';

    //Añadimos dinamicamente el evento click
    const liElements= ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener("click",()=>{
            handleClick(liElement)
        });
    });

    //Verificamos y manejamos el estilo del elemento acctivo
    const handleClick= (elemento)=>{
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