import { Service } from "../service/service.js";
import buildListProducts from "../filters/filterPriceGreater.js";

const bestRating = () => {
    console.log('chamei best rating')
    const valueSelect = document.getElementById('Ranking');
    var chosenFilter = '';

    //função para mudar a lista de produtos conforme seleçao
    valueSelect.onchange = function(){
        chosenFilter = this.value;
        //esvaziando o elemento antes de criar uma 'li' com os novos produtos
        const element = document.querySelector('.product_list');
        element.innerHTML = '';

        if(chosenFilter == 'Melhor Avaliados'){

            Service.filterBestRating()
            .then((response) => {
                const products = response.data;
                //console.log(products[0].rating)
                buildListProducts(products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    }
}

//bestRating();
