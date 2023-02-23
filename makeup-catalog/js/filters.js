import { Service } from "./service.js";

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
                const products = response.data;
                
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
                                <span class="product_brand"> ${product.brand}</span>
                                <span class="product_price">$ ${product.price}</span>   
                            </section>
                        `
                        //atribuindo ao elemento pai um elemento filho
                        product_list.appendChild(element);    
                    }
                });
            })
    }
}


filterBrand();


