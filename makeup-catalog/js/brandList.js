import { Service } from "./service/service.js";

function requestBrand(){
    Service.request()
    .then((response) => {
        buildSelectOptionBrand(response); 
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}

const buildSelectOptionBrand = (response) =>{

    //capturando os objetos obtidos
    const products = response.data;

    var arrayProductsBrand = [];
    var arrayFilteredProductsBrand = [];

    //capturando apenas as marcas dos produtos
    products.forEach(product => {
        arrayProductsBrand.push(product.brand);
    })

    //removendo duplicidade de marcas
    arrayFilteredProductsBrand = arrayProductsBrand.filter((a, b) => arrayProductsBrand.indexOf(a) === b); 

    //Para cada produto encontrado cria-se uma lista com imagem, nome, marca e preço
    arrayFilteredProductsBrand.forEach(brand => {
        const selectOption_list = document.querySelector('#brand');
        
        const element = document.createElement('option');

        element.innerHTML = `
            <option>${brand}</option>
        `
        //atribuindo ao elemento pai um elemento filho
        selectOption_list.appendChild(element);
        
    }); 
} 

requestBrand();