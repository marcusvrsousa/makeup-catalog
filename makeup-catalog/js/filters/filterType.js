import { Service } from "../service/service.js";
import createProductList from "../productsList.js";

const filterProductType = () => {
    const valueSelect = document.getElementById('type');
    var type = '';

     //função para mudar a lista de produtos conforme seleçao
     valueSelect.onchange = function(){
        type = this.value;
        if(type == 'Todas'){
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
        Service.filterType(type)
        .then((response) =>  {
            //criando no DOM a lista de produtos
            createProductList(response);
        })
    }
};

filterProductType();