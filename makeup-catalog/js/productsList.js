import {Service} from './service/service.js'; 

const createProductList = (response) =>{
    //capturando os objetos obtidos pela resposta
    const products = response.data;

    //Para cada produto encontrado cria-se uma lista com imagem, nome, marca e preço
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
    });
}

function productsList(){
Service.request()
    .then((response) => {
        createProductList(response); 
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
};


productsList();


export default createProductList
