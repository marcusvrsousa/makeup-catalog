import { Service } from "../service/service.js";

const filterPrices = () => {
    console.log('chamei filtro de preços')
    const valueSelect = document.getElementById('Ranking');
    var chosenFilter = '';

    //função para mudar a lista de produtos conforme seleçao
    valueSelect.onchange = function(){
        chosenFilter = this.value;
        //esvaziando o elemento antes de criar uma 'li' com os novos produtos
        const element = document.querySelector('.product_list');
        element.innerHTML = '';

        if(chosenFilter == 'Maiores Preços'){
            Service.filterPriceGreaterThan()
            .then((response) => {
                const products = response.data; 
             
                products.sort((a,b) => {
                    return b.price - a.price;
                })

                buildListProducts(products);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }

        if(chosenFilter == 'Menores Preços'){
            Service.filterPriceLessThan()
            .then((response) => {
                const products = response.data; 
             
                products.sort((a,b) => {
                    return a.price - b.price;
                })

                buildListProducts(products);
                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }

        if(chosenFilter == 'Melhor Avaliados'){
            Service.filterBestRating()
            .then((response) => {
                const products = response.data;
                //console.log(products[0].rating)
                buildListProducts(products);
                //console.log()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }

        if(chosenFilter == 'A-Z'){
            Service.request()
            .then((response) => {
                const products = response.data;
                products.sort((a,b) => {
                    if(a.name > b.name){
                        return 1
                    }else if(a.name < b.name){
                        return -1
                    }else{ true }
                })
                buildListProducts(products);
            })
        }
        
        if(chosenFilter == 'Z-A'){
            Service.request()
            .then((response) => {
                const products = response.data;
                products.sort((a,b) => {
                    if(b.name > a.name){
                        return 1
                    }else if(b.name < a.name){
                        return -1
                    }else{ true }
                })
                buildListProducts(products);
            })
        }
    }
}

const buildListProducts = (products) => {
    console.log('chamei buildList')
    products.forEach(product => {
        const product_list = document.querySelector('.product_list');

        const element = document.createElement('li');
        element.className = 'product_list-item';

        if(product.price != '0.0'){
            
            element.innerHTML = `
                <figure class="product_image">
                    <img src="${product.api_featured_image}" width="215" height="215">
                </figure>
                <section class="product_description">
                    <h2 class="product_name"> ${product.name}</h2>
                    <div class="brand_price">
                        <span class="product_brand"> ${product.brand}</span>
                        <span class="product_price">$ ${product.price}</span>  
                    </div> 
                </section>
            `
            //atribuindo ao elemento pai um elemento filho
            product_list.appendChild(element);
        }
    })
};

filterPrices();

export default buildListProducts
