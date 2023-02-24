import { Service } from "./service/service.js";

function requestProductType(){
    Service.request()
    .then((response) =>{
        buildSelectOptionType(response); 
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}


const buildSelectOptionType = (response) => {
    //capturando os objetos obtidos
    const products = response.data;

    var arrayProductsType = [];
    var arrayFilteredProductsType = [];

    //capturando apenas os tipos dos produtos
    products.forEach(product => {
        arrayProductsType.push(product.product_type);
    })

    //removendo duplicidade dos tipos de produto
    arrayFilteredProductsType = arrayProductsType.filter((a, b) => arrayProductsType.indexOf(a) === b); 

    //Para cada tipo de produto é criado um option
    arrayFilteredProductsType.forEach(type => {
        const selectOption_list = document.querySelector('#type');
        
        const element = document.createElement('option');

        element.innerHTML = `
            ${type}
        `
        //atribuindo ao elemento pai um elemento filho
        selectOption_list.appendChild(element);
        
    }); 
}

requestProductType();