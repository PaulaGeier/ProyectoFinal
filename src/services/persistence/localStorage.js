/*===========LOCALSTORAGE===========*/ 
export const hadleGetProductLocalStorage=()=>{
    const products= JSON.parse(localStorage.getItem("products"));
if (products) {
    return products
}else{
    return[];
}
};

//guardar en LocalStorage


//recibir un producto
export const setInLocalStorage=(productIn)=>{

    if (productIn) {
        let productsInLocalStorage=hadleGetProductLocalStorage();
        console.log(productIn);
        const existingIndex= productsInLocalStorage.findIndex((productLocal)=>
            productLocal.id===productIn.id
            )
        if (existingIndex !== -1) {
            //si existe debe reemplazarse
            productsInLocalStorage[existingIndex]=productIn;
        }else{
            ///si no agregarse
            productsInLocalStorage.push(productIn);
        }
        //settear el nuevo array
        localStorage.setItem("products",JSON.stringify(productsInLocalStorage));
    }

}