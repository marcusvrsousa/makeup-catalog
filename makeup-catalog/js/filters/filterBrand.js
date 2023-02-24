import { Service } from "../service/service.js";
import createProductList from "../productsList.js";

const filterBrand = () => {
    const valueSelect = document.getElementById('brand');
    var brand = '';
    //função para mudar a lista de produtos conforme seleçao
    valueSelect.onchange = function(){
        brand = this.value;
        if(brand == 'Todas'){
            Service.request()
            .then((response) => {
                createProductList(response); 
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }

        //esvaziando o elemento antes de criar uma 'li' com os novos produtos
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

