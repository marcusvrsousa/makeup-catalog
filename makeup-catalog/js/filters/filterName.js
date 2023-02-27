const elementInput = document.querySelector('[data-input]');

elementInput.addEventListener('input', searchProductName );


function searchProductName(){
    const produtos = document.querySelectorAll('.product_list-item');
    if(elementInput.value != ''){
        produtos.forEach(product => {
            const h2 = product.querySelector('h2').textContent.toLowerCase();
            console.log(h2)
            let textInput = elementInput.value.toLowerCase(); 
                    
            if(h2.includes(textInput)){
                product.style.display = 'block';
            }else{
                product.style.display = 'none';
            } 
        })

    }else{
        product.style.display = 'block';
    }
}
