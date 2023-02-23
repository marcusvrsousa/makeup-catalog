import { Service } from "./service.js";
import createProductList from "./productsList.js";

const filterBrand = () => {
    const valueSelect = document.getElementById('brand');
    var brand = '';
    valueSelect.onchange = function(){
        brand = this.value;

        //esvaziando o elemento antes de criar uma nova 'li'
        const element = document.querySelector('.product_list');
        element.innerHTML = '';

        //chamando o serviço que filtra marcas
        Service.filterBrand(brand)
        .then((response) =>  {
            //criando no DOM a lista de produtos
            createProductList(response);
        })
    }
}

filterBrand();


